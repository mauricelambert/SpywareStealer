/*
    This file implements functions to store configurations.
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

function saveOptions() {
  const url = document.getElementById('url').value;
  const encryption_key = document.getElementById('encryption_key').value;
  chrome.storage.sync.set({ spyware_url : url, spyware_encryption_key: encryption_key }, () => {
    console.log('Options saved');
  });
}

function restoreOptions() {
  chrome.storage.sync.get({ spyware_url: 'https://webhook.site/9a863a81-4ba4-4aab-92a9-816def5255e8', spyware_encryption_key: 'spyw4re_3ncrypti0n_k3y' }, (items) => {
    document.getElementById('encryption_key').value = items.spyware_encryption_key;
    document.getElementById('url').value = items.spyware_url;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);