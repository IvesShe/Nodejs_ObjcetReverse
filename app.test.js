const { test, expect } = require("@jest/globals");
const app_ins = require("./app");

test("測試",()=>{
    console.log("=====================");
    console.log("測試中...");
    const input = {
        hired: {
            be: {
                to: {
                    deserve: 'I'
                }
            }
        }
    };
    const out = {
        I: {
            deserve: {
                to: {
                    be: 'hired'
                }
            }
        }
    };
    
    expect(app_ins(input)).toEqual(out);
});