
```json
Http Header
{
    "sign": "JzWjVQ245trg3p0CyuwUUHN+Ck40q/HDaMvhqueHDP8YHqC/Uw3c9VWCw4gKsNbk+CRShjT+bvKkck8Fc3aAiRK8wIVQz6eu95sPkJgZp5A0P+tfMH/44F+3CrejtbEIkrHdSwhy98Tv9TYs9QFe7Yni/vEJ8P4OU6FZJOi8LGOMF6Nc8+S5qftc7qLA17cNJ7NJYC+EW8suGe/NmGA9c5NMK5BwHTHzXYOjXwXLx8mw4M3hiirl0wtVym3hrOmbkujYZCH56h8uOVF0FbHGu5uoq61NuniJitLLs9qyiEprQzUe8oWsJnHKXeGAgEr//fLXIXgYsRYb7AWoJzs6Eg=="
}

Http Body
{
    "body":{
        "acquireOrder":{
            "accessoryContent":{
                "amountDetail":{
                    "vatAmount":{
                        "amount":1,
                        "currency":"AED"
                    }
                },
                "goodsDetail":{
                    "body":"gifts",
                    "goodsId":"GI1005",
                    "goodsName":"candy flower"
                },
                "terminalDetail":{
                    "merchantName":"MEPAY"
                }
            },
            "expiredTime":1685959558902,
            "merchantOrderNo":"353f55fe-d037-4000-b1fc-9e189c935b13",
            "notifyUrl":"http://yoursite.com/api/notification",
            "orderNo":"131685952361009035",
            "paySceneCode":"PAYPAGE",
            "payeeMid":"200000030907",
            "product":"Basic Payment Gateway",
            "requestTime":1685952358902,
            "reserved":"order desc",
            "revoked":"false",
            "sharingInfoList":[
                {
                    "sharingAmount":{
                        "amount":1,
                        "currency":"AED"
                    },
                    "sharingIdentitySeqId":1,
                    "sharingMemo":"cashback",
                    "sharingMid":"200000050714"
                }
            ],
            "status":"CREATED",
            "subject":"ipad",
            "totalAmount":{
                "amount":10,
                "currency":"AED"
            }
        },
        "interActionParams":{
            "tokenUrl":"https://paypage.payby.com?BIZ_TYPE=202&ft=dd89cd1b-627c-475c-b60c-8ae3a8faa4d8&t=1581404956715"
        }
    },
    "head":{
        "applyStatus":"SUCCESS",
        "code":"0",
        "msg":"SUCCESS",
        "success":true,
        "traceCode":"619443"
    }
}
```