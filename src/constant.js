const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1672129&lng=73.0235553";
const IMAGE_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const CATEGORIES = [
    {
        "id": "750587",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
            "text": "Chinese",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for chinese",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750579",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
            "text": "Pizzas",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for pizza",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750591",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
            "text": "Biryani",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for biryani",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750589",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
            "text": "Burgers",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for burger",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749868",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
            "text": "Cakes",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for cake",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750581",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
            "text": "North Indian",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for north indian",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750222",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
            "text": "Rolls",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for roll",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750596",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
            "text": "Ice Cream",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for icecream",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750248",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
            "text": "Shawarma",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for shawarma",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749768",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
            "text": "Momos",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for momos",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749760",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
            "text": "Khichdi",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for khichdi",
            "altTextCta": "open"
        },
        "entityId": "80455",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750216",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
            "text": "Pav Bhaji",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pav bhaji",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "749772",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
            "text": "Noodles",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for noodles",
            "altTextCta": "open"
        },
        "entityId": "80463",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750201",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_CCS_Paratha&type=rcv2",
            "text": "Paratha",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for paratha",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80475&tags=layout_CCS_Paratha",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750225",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
            "text": "Salad",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for salad",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750206",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
            "text": "Pasta",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pasta",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750260",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasmalai.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80390?collection_id=80390&tags=layout_BAU_Contextual%2Crasmalai&type=rcv2",
            "text": "Rasmalai",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for rasmalai",
            "altTextCta": "open"
        },
        "entityId": "80390",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750635",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80451?collection_id=80451&tags=layout_CCS_Kebabs&type=rcv2",
            "text": "Kebabs",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for kebabs",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80451&tags=layout_CCS_Kebabs",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750208",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
            "text": "Pastry",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for Pastry",
            "altTextCta": "open"
        },
        "entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "750586",
        "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80430?collection_id=80430&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
            "text": "Gulab Jamun",
            "type": "WEBLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for gulab jamun",
            "altTextCta": "open"
        },
        "entityId": "80430",
        "frequencyCapping": {},
        "externalMarketing": {}
    }
];

const TOP_RESTAURANTS_NEAR_ME = [
    {
        "info": {
            "id": "389314",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Rupa Solitaire Millennium Business Park",
            "areaName": "Vashi",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "61955",
            "avgRatingString": "4.1",
            "totalRatingsString": "4.5K+",
            "sla": {
                "deliveryTime": 55,
                "lastMileTravel": 9.2,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "9.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/chinese-wok-rupa-solitaire-millennium-business-park-vashi-rest389314",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "390800",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_390800.JPG",
            "locality": "Kopar Khairane",
            "areaName": "Vashi",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "434792",
            "avgRatingString": "4.2",
            "totalRatingsString": "2.1K+",
            "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 9.2,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "9.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/big-bowl-kopar-khairane-vashi-rest390800",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "99296",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/b5037660-da06-4c84-90b4-3661bdd2aa97_99296.JPG",
            "locality": "Xperia Mall",
            "areaName": "Palava City",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "6.5K+",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹98"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/pizza-hut-xperia-mall-palava-city-rest99296",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "62773",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/d829bda4-dcd7-4457-b32b-651651b9a700_62773.jpg",
            "locality": "Xperia Dombivali",
            "areaName": "Palava City",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.2,
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "18K+",
            "sla": {
                "deliveryTime": 54,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/burger-king-xperia-dombivali-palava-city-rest62773",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "97694",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/912d0503-4334-4eac-9d40-3420818f7171_97694.JPG",
            "locality": "Dombivli East",
            "areaName": "Dombivli East",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "8.4K+",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹699",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "1.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/kfc-dombivli-east-rest97694",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "569742",
            "name": "Kwality Walls Ice Cream and More",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/5dad1fcf-aa7f-4086-9e18-4eb4c8ab8430_569742.JPG",
            "locality": "Chandan Maitri Vatika Chsl",
            "areaName": "Kalwa",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.7",
            "totalRatingsString": "315",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 6,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "6.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/kwality-walls-ice-cream-and-more-chandan-maitri-vatika-chsl-kalwa-rest569742",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "508897",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/192b8a04-a2b0-4896-bff6-8c55ce276231_508897.jpg",
            "locality": "Shivaji chowk",
            "areaName": "Nilje",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.8,
            "veg": true,
            "parentId": "12175",
            "avgRatingString": "4.8",
            "totalRatingsString": "459",
            "sla": {
                "deliveryTime": 51,
                "lastMileTravel": 8.7,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "8.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹148"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/grameen-kulfi-shivaji-chowk-nilje-rest508897",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "181340",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "pxjzazsm4msmdtjtlsun",
            "locality": "Airoli",
            "areaName": "Airoli",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "4961",
            "avgRatingString": "4.3",
            "totalRatingsString": "6.7K+",
            "sla": {
                "deliveryTime": 72,
                "lastMileTravel": 13.6,
                "serviceability": "SERVICEABLE",
                "slaString": "70-80 mins",
                "lastMileTravelString": "13.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹109"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "2.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/la-pinoz-pizza-airoli-rest181340",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "689980",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/1884a2be-2dca-4b61-a302-99edb3939234_689980.jpg",
            "locality": "SECTOR 8",
            "areaName": "JUHI SERENITY",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.2K+",
            "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 12.2,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "12.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/the-belgian-waffle-co-sector-8-juhi-serenity-rest689980",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "30309",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/019ef691-edb7-4330-9b8f-09ca7e210cac_30309.JPG",
            "locality": "Satyam Towers",
            "areaName": "Kopar Khairane",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "21809",
            "avgRatingString": "4.3",
            "totalRatingsString": "11K+",
            "sla": {
                "deliveryTime": 57,
                "lastMileTravel": 10.8,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "10.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Rolls.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/faasos-wraps-rolls-and-shawarma-satyam-towers-kopar-khairane-rest30309",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "63237",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/eeaf33d4-0f07-4b3d-84d4-da9dedb50111_63237.JPG",
            "locality": "Xperia Mall",
            "areaName": "Palava City",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "11K+",
            "sla": {
                "deliveryTime": 48,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/mcdonalds-xperia-mall-palava-city-rest63237",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "105848",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/a4b642f2-c2ee-4ff5-b615-640809aa5d6b_105848.JPG",
            "locality": "Dombivli East",
            "areaName": "Dombivli East",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.5,
            "parentId": "2",
            "avgRatingString": "4.5",
            "totalRatingsString": "3.3K+",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "428"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/subway-dombivli-east-rest105848",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "677573",
            "name": "Theobroma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/b9e99fa6-7653-43ed-abf4-5ff24466cc25_677573.JPG",
            "locality": "Dombivli East",
            "areaName": "Dombivli East",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "1040",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.0K+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "2.9",
                    "ratingCount": "48"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/theobroma-dombivli-east-rest677573",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "578580",
            "name": "Bakingo-Cakes & Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/11/d2bae45b-9e0c-43fb-b8d1-ec1f0ad96b1d_578580.JPG",
            "locality": "Chakala",
            "areaName": "Navi Mumbai",
            "costForTwo": "₹299 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "3818",
            "avgRatingString": "4.6",
            "totalRatingsString": "2.3K+",
            "sla": {
                "deliveryTime": 83,
                "lastMileTravel": 14,
                "serviceability": "SERVICEABLE",
                "slaString": "80-90 mins",
                "lastMileTravelString": "14.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "ABOVE ₹3000",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/bakingo-cakes-and-desserts-chakala-navi-mumbai-rest578580",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "113952",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/c50c103b-5b37-45cf-b338-f05c3958e59e_113952.JPG",
            "locality": "Dombivli",
            "areaName": "Palava City",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.6",
            "totalRatingsString": "851",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 7.9,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "7.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 22:50:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/baskin-robbins-ice-cream-desserts-dombivli-palava-city-rest113952",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "508896",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/0acb1909-d44d-49c5-a29f-93411eb23b18_508896.JPG",
            "locality": "Dombivali",
            "areaName": "Palava City",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.7",
            "totalRatingsString": "2.0K+",
            "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 8.7,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "8.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-18 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹175"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/nic-ice-creams-dombivali-palava-city-rest508896",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "465497",
            "name": "Wow! Momo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/1951b48e-f77d-4afe-b11e-d2956aa563d8_465497.jpg",
            "locality": "Sector 6",
            "areaName": "Airoli",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "fastfood",
                "Asian",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "1776",
            "avgRatingString": "4.0",
            "totalRatingsString": "1.9K+",
            "sla": {
                "deliveryTime": 86,
                "lastMileTravel": 14.8,
                "serviceability": "SERVICEABLE",
                "slaString": "85-95 mins",
                "lastMileTravelString": "14.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/wow-momo-sector-6-airoli-rest465497",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "29554",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
            "locality": "Satyam Towers",
            "areaName": "Kopar Khairane",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "1803",
            "avgRatingString": "4.3",
            "totalRatingsString": "7.2K+",
            "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 10.7,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "10.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/behrouz-biryani-satyam-towers-kopar-khairane-rest29554",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "30339",
            "name": "Oven Story Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/b902ee10-4cb1-4f0a-b6b7-de3a02ce1a21_30339.jpg",
            "locality": "Satyam Towers",
            "areaName": "Satyam Tower",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "3534",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.9K+",
            "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 10.7,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "10.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/oven-story-pizza-s-satyam-tower-rest30339",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "62968",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/4b13c745-23f9-4bdc-9468-a2905d5917c1_62968.jpg",
            "locality": "Satyam Towers",
            "areaName": "Kopar Khairane",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Thalis",
                "North Indian",
                "Biryani",
                "South Indian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4925",
            "avgRatingString": "4.4",
            "totalRatingsString": "9.8K+",
            "sla": {
                "deliveryTime": 58,
                "lastMileTravel": 10.8,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "10.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-09-17 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d814dcb0-de69-498b-99d4-fe64da71b5a8"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/lunchbox-meals-and-thalis-satyam-towers-kopar-khairane-rest62968",
            "type": "WEBLINK"
        }
    }
];
export {API_URL,IMAGE_BASE_URL,CATEGORIES,TOP_RESTAURANTS_NEAR_ME};