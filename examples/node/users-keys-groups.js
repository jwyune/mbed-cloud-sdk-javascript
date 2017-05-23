/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var mbedCloudSDK = require("../../index");
var config = require("./config");

var access = new mbedCloudSDK.AccountManagementApi(config);

var options = [
    {
        title: "List users",
        execute: listUsers
    },
    {
        title: "List keys",
        execute: listKeys
    },
    {
        title: "List groups",
        execute: listGroups
    },
    {
        title: "Exit",
        execute: process.exit
    }
];

function logError(error) {
    console.log(error.message || error);
    process.exit();
}

function showOptions() {
    console.log("\nSelect an option:");
    options.forEach((option, index) => {
        console.log(`${index + 1}: ${option.title}`);
    });
}

function listUsers() {
    console.log("\nUsers\n-----");
    return access.listUsers()
    .then(users => {
        return users.data.reduce((promise, user) => {
            return promise
            .then(() => {
                return user.listGroups();
            })
            .then(groups => {
                groups = groups.map(group => {
                    return group.name;
                }).join(", ");

                console.log(`${user.fullName} [${groups}]`);
            });
        }, Promise.resolve());
    });
}

function listKeys() {
    console.log("\nAPI Keys\n--------");
    return access.listApiKeys()
    .then(keys => {
        keys.data.forEach(key => {
            console.log(`${key.key} [${key.name}]`);
        });
    });
}

function listGroups() {
    console.log("\nGroups\n------");
    return access.listGroups({
        include: ["userCount", "apiKeyCount", "totalCount"]
    })
    .then(groups => {
        groups.data.forEach(group => {
            console.log(`${group.name} [${group.userCount} user(s), ${group.apiKeyCount} key(s)]`);
        });
    });
}

process.stdin.setRawMode(true);
process.stdin.setEncoding("utf8");
process.stdin.on("readable", () => {
    var input = process.stdin.read();
    if (input === "\u0003") {
        process.exit();
    } else {
        var index = parseInt(input);
        if (index && index <= options.length) {
            options[index - 1].execute()
            .then(() => {
                showOptions();
            })
            .catch(logError);
        }
    }
});

showOptions();