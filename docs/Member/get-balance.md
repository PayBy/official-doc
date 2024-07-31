---
sidebar_position: 1
toc_max_heading_level: 6
---



# Get Balance

The GetBalance API allows merchants to query their account balance, providing detailed information about available, frozen, and total balance amounts.

This API is used to query the member account balance.



### API URL

UAT : https://uat.test2pay.com/sgs/api/member/getBalance

Production : https://api.payby.com/sgs/api/member/getBalance



## Http Header

| Field Name          | Variable Name | Required | Type       | Example Value | Description   |
|---------------------|---------------|----------|------------|---------------|---------------|
| Content-Language    |               | Optional | String(10) | in            | en-English    |
| sign                | Sign          | Required | String     |               |               |
| Partner-Id          |               | Required | String(12) |               |               |

## Http Body

| Field Name        | Variable Name | Required | Type                | Example Value   | Description           |
|-------------------|---------------|----------|---------------------|-----------------|-----------------------|
| When requested    | requestTime   | Required | Timestamp(3)        | 1581493898000   |                       |
| Business          | bizContent    | Required | GetMemberBalanceRequest |             |                       |

## GetMemberBalanceRequest

| Field Name | Variable Name | Required | Type   | Example Value | Description |
|------------|----------------|----------|--------|---------------|-------------|
| Currency   | currencyCode   | Required | String | AED           |             |


## Request Sample

### Http Header
```json
{
  "Content-Language": "en",
  "Content-Type": "application/json",
  "Partner-Id": "200000018128",
  "sign": "RXF8WmC67QSnr62l3oU33fjpUvAo6Yr9vk05c/vYLtmHRGMoAH4qSnap2pto3mY7KgyP5wkNUsyQXJ/ZwbfcSONLb5zA77q74lsOwdJw3BKXxVWr4tfjkA02Pfcp0cZWjE/Y8jTcbtgdc5Vl90LNmkgPWbrSlDbNW8p3NIhnKg+Xfl95SgMBPF9afftsU/2a5jLnZXSVcXoSthxpJ6XkZwd45+jhOjBguT+lC8uLVSNRvwDisRGgf9PYv39OH6lTEhbY2sgjkdZBZBOZlt7awy2vkMEsePsuafwrNhuz7xzjj55PzNzk8+zCUu/791OhC/eFUyGimtDw5mX9cyQw=="
}


{
  "bizContent": {
    "currencyCode": "AED"
  },
  "requestTime": 1708485334645
}


```



## Response Parameters

### Http Header

| Field Name      | Variable Name | Required | Type   | Example Value | Description |
|-----------------|----------------|----------|--------|---------------|-------------|
| sign            | Sign           | Required | String |               |             |

The body field in the Http Body is returned only when applyStatus is SUCCESS and code is 0.

### Http Body

| Field Name          | Variable Name      | Required | Type           | Example Value | Description |
|---------------------|--------------------|----------|----------------|---------------|-------------|
| Response header     |                    | Required | ResponseHeader |               |             |
| Response body       |                    | Optional | MemberBalance  |               |             |

### MemberBalance

| Field Name              | Variable Name  | Required | Type  | Example Value | Description |
|-------------------------|----------------|----------|-------|---------------|-------------|
| Member ID               | memberId       | Required | String| 200000018128  |             |
| Order information       | balanceList    | Required | List  |               |             |

### Balance

| Field Name         | Variable Name     | Required | Type  | Example Value | Description |
|--------------------|-------------------|----------|-------|---------------|-------------|
| Available Balance  | availableBalance  | Required | Money |               |             |



### Sample Response

#### Http Header

```json
{
  "sign": "nDdCIX1tAyV3qcX/Epay6AXFNRGSsWd8ysWO9SgwPrNTetSePLA9C39mGp6qRbjJeqXLEnYLwSkBu5eKdtvXX3HtiGLi2kvRYjfYpTCjXdVL2Pncv2w+ghjHe2jL988ilk7q5AjAgdtXNphpHTcTes9pk6W3bVCbvjiH6atOfExUZt91L1LmPGELT1IJm/IFW3w4KLh0Gxs7FzDPi9RDFUemObNlRzV8kCtkWahvPgs/hBnS69GyYDKN7ihQX2iUiLP239wI6IA+VG/ZZKHPhLs8bbuOS+LKWORlp6jRt+JsAx7c/O1tRNyOnHKxPRKJ8bVTohEp39yUz/HwG8oA=="
}

{
  "body": {
    "balanceList": [
      {
        "availableBalance": {
          "amount": 897993.88,
          "currency": "AED"
        }
      }
    ],
    "memberId": "200000030907"
  },
  "head": {
    "applyStatus": "SUCCESS",
    "code": "0",
    "msg": "SUCCESS",
    "success": true,
    "traceCode": "375099"
  }
}



```



#### Return Code

| code   | msg                        | reason                                 | solution                       |
|--------|----------------------------|----------------------------------------|--------------------------------|
| 0      | SUCCESS                    | success                                |                                |
| 400    | INVALID_PARAMETER          | Parameter error                        | Adjusting request parameters   |
| 400    | REQUESTTIME_TOO_EARLY      | The request time is greater than the current time Too early     | Adjust request time            |
| 400    | REQUESTTIME_TOO_LATER      | The request time is greater than the current time Too late      | Adjust request time            |
| 402    | RATE_LIMIT_REJECT          | Too many requests                      | Reduce request frequency       |
| 403    | UNAUTHORIZED               | API not authorized                     | Contact PayBy                  |
| 404    | SERVICE_NOT_AVAILABLE      | API service unavailable                | Contact PayBy                  |
| 500    | SYSTEM_ERROR               | system error                           | Contact PayBy later Retry    |
| 504    | SERVICE_TIMEOUT            | Service timeout                        | Try again later                |
| 601    | RISK_FAIL                  | Risk control verification failed       | Please adjust your business    |
| 78001  | CURRENCY_CODE_NOT_SUPPORTED| The currency is not supported.         | Adjusting request parameters   |
