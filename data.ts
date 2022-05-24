const fields = [
  {
    "tofId": 567,
    "name": "ORIGINAL_ID",
    "type": "TOF",
    "format": "STRING",
    "value": "FXTF#0"
  },
  {
    "tofId": 568,
    "name": "PREVIOUS_ID",
    "type": "TOF",
    "format": "STRING",
    "value": "FXTF#0"
  },
  {
    "tofId": 569,
    "name": "pureDealType",
    "type": "TOF",
    "format": "STRING",
    "value": "Deposit"
  },
  {
    "tofId": 570,
    "name": "INTEREST_VOLUME",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": "1244.44"
  },
  {
    "tofId": 571,
    "name": "ELAPSED_DAYS",
    "type": "TOF",
    "format": "STRING",
    "value": "8.00"
  },
  {
    "tofId": 572,
    "name": "yearLength",
    "type": "TOF",
    "format": "STRING",
    "value": "360.00"
  },
  {
    "tofId": 575,
    "name": "SWIFT_BIC_P1C1",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 577,
    "name": "SWIFT_BIC_P2C1",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 581,
    "name": "BASE_CURR2",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 582,
    "name": "BASE_CURR3",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 583,
    "name": "RATE_BASE_CURR2_USD",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": null
  },
  {
    "tofId": 584,
    "name": "RATE_BASE_CURR3_USD",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": null
  },
  {
    "tofId": 585,
    "name": "TRANSACTION_ID",
    "type": "TOF",
    "format": "STRING",
    "value": "FXTF405620FXTF2205240815"
  },
  {
    "tofId": 595,
    "name": "CLEARING_HOUSE",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 596,
    "name": "OUR_CLEARING_MEMBER",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 597,
    "name": "THEIR_CLEARING_MEMBER",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 698,
    "name": "ON_BEHALF_OF_CODE",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 699,
    "name": "ON_BEHALF_OF_NAME",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 15319,
    "name": "LINK_ID",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 15331,
    "name": "bank1DealingCode",
    "type": "TOF",
    "format": "STRING",
    "value": "FXTF"
  },
  {
    "tofId": 15332,
    "name": "CPTY_NAME",
    "type": "TOF",
    "format": "STRING",
    "value": "FXTF                "
  },
  {
    "tofId": null,
    "name": "TICKET_NO",
    "type": "TOF",
    "format": "STRING",
    "value": "bde97922-d21d-48f6-9e7b-ac81cb6c9bda"
  },
  {
    "tofId": 522,
    "name": "EXCHANGE_RATE_PERIOD_1",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": null
  },
  {
    "tofId": 523,
    "name": "EXCHANGE_RATE_PERIOD_2",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": null
  },
  {
    "tofId": null,
    "name": "isDealType",
    "type": "CUSTOM",
    "format": "STRING",
    "value": "MM Wakala Deposit"
  },
  {
    "tofId": null,
    "name": "WAKALA_ASSET",
    "type": "MANUAL",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": null,
    "name": "WAKALA_FEE",
    "type": "MANUAL",
    "format": "BIG_DECIMAL",
    "value": null
  },
  {
    "tofId": null,
    "name": "WAKALA_ESTIMATED_PROFIT_RATE",
    "type": "MANUAL",
    "format": "BIG_DECIMAL",
    "value": null
  },
  {
    "tofId": null,
    "name": "whtChargeToCtp",
    "type": "MANUAL",
    "format": "STRING",
    "value": "Yes"
  },
  {
    "tofId": null,
    "name": "ISLAMIC_DEAL_PRODUCT_NAME",
    "type": "CUSTOM",
    "format": "STRING",
    "value": "02"
  },
  {
    "tofId": 500,
    "name": "SOURCE_OF_DATA_CODE",
    "type": "TOF",
    "format": "STRING",
    "value": "3.00"
  },
  {
    "tofId": 501,
    "name": "sourceReference",
    "type": "TOF",
    "format": "STRING",
    "value": "11832"
  },
  {
    "tofId": 502,
    "name": "dealTime",
    "type": "TOF",
    "format": "DATETIME",
    "value": "2022-05-24T08:15:26.52Z"
  },
  {
    "tofId": 504,
    "name": "dealerId",
    "type": "TOF",
    "format": "STRING",
    "value": "TUIB"
  },
  {
    "tofId": 506,
    "name": "CONFIRMED_DATETIME",
    "type": "TOF",
    "format": "DATETIME",
    "value": "2022-05-24T08:17:24.95Z"
  },
  {
    "tofId": 507,
    "name": "CONFIRMED_BY_ID",
    "type": "TOF",
    "format": "STRING",
    "value": "TUIB"
  },
  {
    "tofId": 510,
    "name": "BROKER_DEALING_CODE",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 511,
    "name": "BROKER_NAME",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 513,
    "name": "BANK2_NAME",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 514,
    "name": "Direction",
    "type": "TOF",
    "format": "STRING",
    "value": "Borrow (in Deposit deals)"
  },
  {
    "tofId": 515,
    "name": "PERIOD1",
    "type": "TOF",
    "format": "STRING",
    "value": "Spot"
  },
  {
    "tofId": 516,
    "name": "PERIOD2",
    "type": "TOF",
    "format": "STRING",
    "value": "Broken or non-standard"
  },
  {
    "tofId": 517,
    "name": "currency1",
    "type": "TOF",
    "format": "STRING",
    "value": "CHF"
  },
  {
    "tofId": 518,
    "name": "CURRENCY2",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 519,
    "name": "dealVolumeCurrency1",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": "5000000.00"
  },
  {
    "tofId": 520,
    "name": "depositRate",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": "1.12"
  },
  {
    "tofId": 525,
    "name": "valueDateP1Cur1",
    "type": "TOF",
    "format": "DATE",
    "value": "2022-05-26"
  },
  {
    "tofId": 527,
    "name": "maturityDate",
    "type": "TOF",
    "format": "DATE",
    "value": "2022-06-03"
  },
  {
    "tofId": 529,
    "name": "PAYMENT_INSTRUCTION_P1C1",
    "type": "TOF",
    "format": "STRING",
    "value": "MY ACCOUNT"
  },
  {
    "tofId": 531,
    "name": "PAYMENT_INSTRUCTION_P2C1",
    "type": "TOF",
    "format": "STRING",
    "value": "No instructions specified"
  },
  {
    "tofId": 539,
    "name": "SECONDARY_SOURCE_REFERENCE",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 540,
    "name": "METHOD_OF_DEAL",
    "type": "TOF",
    "format": "STRING",
    "value": "Dealing - T (Ticket)"
  },
  {
    "tofId": 541,
    "name": "RATE_CURR1_USD",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": "0.962"
  },
  {
    "tofId": 543,
    "name": "RATE_BASE_CURR_USD",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": null
  },
  {
    "tofId": 544,
    "name": "BASE_CURR",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 547,
    "name": "FORWARD_AMOUNT",
    "type": "TOF",
    "format": "BIG_DECIMAL",
    "value": "5001244.44"
  },
  {
    "tofId": 549,
    "name": "DEALER_NAME",
    "type": "TOF",
    "format": "STRING",
    "value": "Ihor Bakai1"
  },
  {
    "tofId": 550,
    "name": "CONFIRMED_BY_NAME",
    "type": "TOF",
    "format": "STRING",
    "value": "Ihor Bakai1"
  },
  {
    "tofId": 551,
    "name": "LOCAL_TCID",
    "type": "TOF",
    "format": "STRING",
    "value": "FXTF"
  },
  {
    "tofId": 552,
    "name": "REVIEW_REFERENCE_NUMBER",
    "type": "TOF",
    "format": "STRING",
    "value": "11832"
  },
  {
    "tofId": 553,
    "name": "COMMENT_TEXT",
    "type": "TOF",
    "format": "STRING",
    "value": "02"
  },
  {
    "tofId": 560,
    "name": "SPOT_BASIS_RATE",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 561,
    "name": "USER_DEF_TITLE1",
    "type": "TOF",
    "format": "STRING",
    "value": "User Info #1"
  },
  {
    "tofId": 562,
    "name": "USER_DEF_DATA1",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 563,
    "name": "USER_DEF_TITLE2",
    "type": "TOF",
    "format": "STRING",
    "value": "User Info #2"
  },
  {
    "tofId": 564,
    "name": "USER_DEF_DATA2",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": 565,
    "name": "USER_DEF_TITLE3",
    "type": "TOF",
    "format": "STRING",
    "value": "User Info #3"
  },
  {
    "tofId": 566,
    "name": "USER_DEF_DATA3",
    "type": "TOF",
    "format": "STRING",
    "value": null
  },
  {
    "tofId": null,
    "name": "WORKFLOW_COMMENTS",
    "type": "CUSTOM",
    "format": "STRING",
    "value": null
  }
]

export default fields;
