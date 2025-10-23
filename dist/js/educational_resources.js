const platformData = {
    // featured: {
    //     title: "محتوى مميز",
    //     description: "اكتشف أفضل الموارد التعليمية المختارة خصيصًا لك.",
    //     itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12",
    //     items: [
    //         { type: 'featured', image: 'https://picsum.photos/seed/feat1/400/300', tag: 'بودكاست', title: 'وعي بودكاست', description: 'يناقش مواضيع متنوعة في الوعي والتنمية الذاتية.', buttonText: 'استماع', buttonIcon: 'fa-headphones', rating: 4.8, link: '#' },
    //         { type: 'featured', image: 'https://picsum.photos/seed/feat2/400/300', tag: 'برمجة', title: 'تعلم البرمجة من الصفر', description: 'كورس شامل لتعلم أساسيات البرمجة للمبتدئين.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', rating: 4.9, link: '#' },
    //         { type: 'featured', image: 'https://picsum.photos/seed/feat3/400/300', tag: 'لغات', title: 'تعلم اللغة الألمانية A1', description: 'دورة شاملة لتعلم اللغة الألمانية.', buttonText: 'تصفح', buttonIcon: 'fa-book-open', rating: 4.7, link: '#' },
    //         { type: 'featured', image: 'https://picsum.photos/seed/feat4/400/300', tag: 'مستندات', title: 'دليل الإدارة الناجحة للمدراء', description: 'كتاب إلكتروني يقدم أساسيات الإدارة.', buttonText: 'تحميل', buttonIcon: 'fa-download', rating: 4.6, link: '#' },
    //     ]
    // },
    podcasts: {
        title: "البودكاست",
        description: "استمع إلى مجموعة متنوعة من البودكاست في مختلف المجالات شباب بتساعد شباب ترشحها لك.",
        viewMoreButtonClass: "btn-primary",
        subcategories: [
            { title: "العربية", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'podcast', image: 'https://yt3.googleusercontent.com/v6hdc_JJgTKkXTjNFvttDzPgHPd4p9qCb56BozQn5fNhqACfon_AsvkyL638qB1TDlDHGHzT0Q=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'دروس أونلاين', description: 'دروس صوتية متنوعة في مجالات مختلفة يقدمها أحمد أبو زيد حيث يستضيف أشهر وأفضل الخبراء في مختلف المجالات.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+37 حلقة', link: 'https://www.youtube.com/playlist?list=PL5isa5XjlZ5pH8vT0TJO9qZrRiZcrWuDp' },
                    { type: 'podcast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple211%2Fv4%2Fe0%2Fea%2Ff2%2Fe0eaf2cf-b7b8-22db-4956-19e85d6b4dd2%2FAppIcon-0-0-1x_U007emarketing-0-9-0-85-220.png%2F1200x630wa.png&f=1&nofb=1&ipt=e6c3f77dc263e9ac12020a111616f1c216c038112b0056d9f1d7dbc6dc3c938c', tag: 'أعمال', title: 'بزنس بالعربي', description: 'بودكاست يناقش ريادة الأعمال والتجارة.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+140 حلقة', link: 'https://youtube.com/playlist?list=PLK6R01zBa3vJKurhwVvRhjQxpC60jrSO3' },
                    { type: 'podcast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEixVVpnlPpRHMCyvp8ERev0yF0I3tBid2vuscZZh4JOP1JZ7di0lRNVcPKQ_00VvQe-ooMN0Z18WOD-HWzLBb0eFtgU8MRCIRG-1gV7JQNzclo1Yx66Eo9vjlYyFV5S1FbTYqEIi17onySm5e5nc7ZilUo54gOuw7_2ehMkMUkTeinetkHVZd3w959wiMVE%2Fs225%2F%25D9%2588%25D8%25AF%25D9%2583%25D8%25A7%25D8%25B3%25D8%25AA%2520%25D9%2588%25D8%25B9%25D9%258A.png&f=1&nofb=1&ipt=27f2562a11083949cc006d4f026985ad8ad24b94697e04491bfe67a17ff51728', tag: 'ديني', title: 'وعي', description: 'بودكاست وعي للتحدث في جوانب دينية وثقافية مع حازم الصديق، أحمد عامر وشريف علي .', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+76 حلقة', link: 'https://youtube.com/playlist?list=PLCpK4282MCT-lBXi4Nodjzq1TDZsK9qwr&si=gu1dIQnqWYiIZbxj' },
                    { type: 'podcast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fedumefree.com%2Fwp-content%2Fuploads%2F2023%2F07%2Ffnjan-banner-2-1024x356.png&f=1&nofb=1&ipt=8459ebab8cffc5510038963ff568f8fd2a2eac4536cf043c98a431120a4d1c1a', tag: 'متنوع', title: 'فنجان', description: 'بودكاست يتناول مواضيع مختلفة في مجالات عديدة ويصنف من أكبر محتويات علي مستوي الوطن العربي.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+250 حلقة', link: 'https://youtube.com/playlist?list=PLeNNUmE-BlnEls2kOkiV2CXMezV6oaq8I' },
                    { type: 'podcast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2F1400_opt_1%2F51dd98160650305.63b7f5864414c.jpg', tag: 'بيزنس', title: 'سوالف بزنس', description: 'بودكاست للتحدث بودكاست للمهتمين بالبزنس وريادة الأعمال، مع مشهور الدبيان. كل حلقة راح تسمع تجربة شخص في البيزنس بتفاصيلها، بدون مجاملات أو تنظير.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+128 حلقة', link: 'https://youtube.com/playlist?list=PLeNNUmE-BlnE5GVCM_aZtWCLzCzHYA-ho' },
                    { type: 'podcast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPodcasts116%2Fv4%2F63%2Fc5%2F50%2F63c550db-9301-0463-47e4-1e228438521c%2Fmza_1069598080308186630.jpg%2F1200x1200bb.jpg', tag: 'تعليم', title: 'شاهين شو كاست', description: 'بودكاست يهتم بالتطوير وموازنة جوانب الحياة وتجمع بين العرض والبودكاست حيث يستضيف أحمد شاهين أشهر وأفضل الخبراء في مختلف المجالات.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+60 حلقة', link: 'https://youtube.com/playlist?list=PLHWFdqV6LNLyop_1Z2bU1HsQJS-et1iyZ' },
                    { type: 'podcast', image: 'https://i1.sndcdn.com/avatars-fLzTPfgnzEUbGFdi-tUGqBw-t500x500.jpg', tag: 'ديني', title: 'فاهم', description: 'بودكاست حواري يقدمه هلال السيد، يهدف إلى تقديم رؤية إسلامية متكاملة وإثراء وعي المسلمين في شتى جوانب حياتهم الدينية والدنيوية.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+64 حلقة', link: 'https://youtube.com/playlist?list=PLSFJcWy6euuCVCCDoku7xlV3BbzujmZQx' },
                    { type: 'podcast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEjcnRHR31-EgsyZUCmnFOuo_2jebaCejbEW_QOL7I9WNBGP-ipiiwyulkX4dYW0Y6Gyz9taCGfBlG6ujxAYjZTbyXoEfVP4r55R0CiBG6yDYcbsUr-ciaZS3W4WQgNsXNNY5xgsqhMNvohAv_7F4TtUzwA120TmGkoDtIW2W4v6CCIidF-IexVgIloPpitd%2Fw1280-h720-p-k-no-nu%2Fchannels4_profile.jpg', tag: 'متنوع', title: 'بدون ورق', description: 'بودكاست  يقدمه الإعلامي الكويتي فيصل العقل يتناول فيه حوارات عميقة ومفتوحة مع شخصيات مؤثرة في مواضيع متنوعة تشمل المجتمع، الثقافة، التاريخ، والفكر.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+166 حلقة', link: 'https://youtube.com/playlist?list=PL7oUBfFaaMGS7xST4i9maeMd0JkRR5O03' },
                ]},
            { title: "الإنجليزية", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'podcast', image: 'https://m.media-amazon.com/images/I/41bqc26837L.jpg', tag: 'بيزنس', title: 'Deep Dive with Ali Abdaal', description: 'بودكاست يستكشف عقول رواد الأعمال والمبدعين وغيرهم من الأشخاص الملهمين لاكتشاف الفلسفات والاستراتيجيات والأدوات.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+110 حلقة', link: 'https://youtube.com/playlist?list=PL9KXtqUiGVbs6RWYY5vxyrxsKdrQFaWm2&si=RvwuE9UF0ZVS2NGN' },
                    { type: 'podcast', image: 'https://yt3.googleusercontent.com/poYG7DR80A_6suDilLK0L8a1i0oOsyWXgHRjeuxb9NinSTdEzQ3y41rFN4UWgNoXHbAqIJYl=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تطوير', title: 'All The Diary Of A CEO Episodes', description: 'بودكاست يقدمه ستيفن بارتليت يقدم حوارات عميقة مع شخصيات مؤثرة، يستكشف مسيراتهم، تحدياتهم، ورؤاهم، والدروس حول النجاح والنمو الشخصي..', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+390 حلقة',link: 'https://youtube.com/playlist?list=PL22egh3ok4cP0T7UZRmP6TMLErZYWMN-l' },
                    { type: 'podcast', image: 'https://assets-global.website-files.com/64416928859cbdd1716d79ce/650b5f294f029dbf47305ec1_Huberman-Lab-Podcast-Intro-1920x1080-1.jpg', tag: 'علمي', title: 'Huberman Lab', description: 'بودكاست مقدم من أندرو هوبرمان، عالم أعصاب وأستاذ بجامعة ستانفورد، يناقش العلوم العصبية وأدواتها العلمية. بهدف تحسين جوانب الحياة اليومية..', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+280 حلقة', link: 'https://www.youtube.com/playlist?list=PLPNW_gerXa4Pc8S2qoUQc5e8Ir97RLuVW' },
                    { type: 'podcast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffa%2Fd5%2Ffc%2Ffad5fcc98b3b16d10f9c4edf4574c298.jpg&f=1&nofb=1&ipt=04a74b7f2e60963c71782b34272c6a22b2698c8bff6c37e68734d27c79c3a419', tag: 'متنوع', title: 'The Joe Rogan Experience', description: 'من أقدم و أكبر المحتويات الخاصة بالبودكاست في العالم يقدمه جوي روجن مع ضيوف من مجالات مختلفة.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+2300 حلقة', link: 'https://youtube.com/playlist?list=PLk1Sqn_f33KuWf3tW9BBe_4TP7x8l0m3T' },
                    { type: 'podcast', image: 'https://passivemakers.com/wp-content/uploads/2024/02/Best-Tim-Ferriss-Podcast.jpg', tag: 'تطوير', title: 'The Tim Ferriss Show', description: 'بودكاست يقدم مقابلات مع أشخاص ناجحين من مختلف المجالات لاستخلاص أدوات تطوير النفس.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+630 حلقة',link: 'https://www.youtube.com/playlist?list=PLuu6fDad2eJyWPm9dQfuorm2uuYHBZDCB' },
                    { type: 'podcast', image: 'https://lh3.googleusercontent.com/iNhgYUXYXygjd-Ice0Gkfet3kobAJULqCCtyt4nxCqcXIuF4vECI9PVi4_GUn3pTqoqg=w1264', tag: 'تعليمي', title: 'Stuff You Should Know', description: 'مواضيع علمية وتاريخية متنوعة بأسلوب مبسط وممتع للتعلم اليومي.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+485 حلقة', link: 'https://youtube.com/playlist?list=PL6NmnwdNzZJtKvy-7jRXLAPeen7O-wAoK' },
                ]}
        ]
    },
    languages: {
        title: "تعلم اللغات",
        description: "تعلم اللغات هو استثمار في نفسك ومستقبلك. كل لغة جديدة بتتعلمها هي مفتاح لباب جديد مليان فرص، سواء في الشغل، السفر، أو حتى فهم العالم بشكل أعمق. مش بس بتتعلم كلمات وقواعد، لكن بتعيش تجربة تفتح ليك عوالم مختلفة وتوصلك بناس وثقافات ما كنتش هتعرفها غير كده. قرارك تبدأ تتعلم لغة جديدة هو أول خطوة لنجاح مختلف وتميز يبني شخصيتك",
        viewMoreButtonClass: "btn-tertiary",
        subcategories: [
            { title: "اللغة الإنجليزية", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'language', image: 'https://yt3.googleusercontent.com/K3-hD9aGLzCdFXwoctBZ6wu4RSQ6UErl0lHzjpZj_U2S-Ie-P5Dy-eynuu-Wwqt5Bq_SJ49q=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'محادثة', title: 'English Speaking with Brian', description: 'تعلم مهارات المحادثة بالإنجليزية.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@BrianWilesQuizzes/playlists' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/eaa72903-656b-4774-8680-2dc56467a6f7_unnamed-3.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'حيل', title: 'Learn with Jazzz', description: 'حيل و معلومات سريعة تقدمها ياسمين خالد لتعلم اللغةالإنجليزية بكل سهولة.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.tiktok.com/@learnwithjazzz' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/OUOET2vmQL-UbY-kUPZCi7qi8qPrlnxHB5PNVPTjuLwlQqPvL4_Mp_EHD_mxSpfKJeRjjWnn=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'انجليزي', title: 'zAmericanEnglish', description: 'تعلم اللغة الإنجليزية من مستوى المبتدئين وشق طريقك إلى الطلاقة. لن تحتاج إلى دورات مدفوعة الأجر.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@ZAmericanEnglish' },
                    { type: 'language', image: 'https://i3.ytimg.com/vi/FBTbE7lY888/maxresdefault.jpg', tag: 'انجليزي', title: 'EnglishClass101.com', description: 'تعلم اللغة الإنجليزية مع EnglishClass101.com - أسرع وأسهل وأكثر الطرق متعة لتعلم اللغة الإنجليزية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@EnglishClass101' },
                    { type: 'language', image: '', tag: 'ترفيهي', title: 'Learn English With TV Series', description: 'قناة تستخدم برامجك التلفزيونية المفضلة، والأفلام، والبرامج الحوارية، لتتعلم كيف تفهم اللغة الإنجليزية الأصلية دون أن تضيع، ودون أن تفوتك النكات، ودون أن تفوتك الترجمة.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@LearnEnglishWithTVSeries' },
                    { type: 'language', gradientClass: 'gradient-pink-based', tag: 'محتوي أصلي', title: 'خطة تعليمية مقدمة من شباب بتساعد شباب', description: 'سلسلة تتضمن كل المصادر لتعلم الانجليزية من خلالها بطريقة سلسة ومرتبة ومنظمة على حسب مستواك و اهتمامك و بعض النصائح أثناء التعلم.', buttonText: 'تصفح', buttonIcon: 'fa-book-open', details: '', link: 'https://www.facebook.com/story.php?story_fbid=317393047658096&id=100081622080808&rdid=DZRJqm0gOn8fve7U',rating: 1330 },
                ] },
            { title: "اللغة الألمانية", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'language', image: 'https://ugc.production.linktr.ee/f7a39b24-3ef0-4c6e-ad67-2e9ba082fbc5_unnamed-4.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'Deutsch mit Mira', description: 'تعلم اللغة الألمانية مع ميرا بكل سهولة ومتعة، سواء كنت مبتدئًا أو لديك بعض المعرفة أو كنت تستعد لإجراء اختبار TELC B1.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@DeutschmitMira' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/wRV5vdYdC9nbFl0i_7FrZlg4r7bFMmnbmEowZ5jUAw8wXufo-EJzXgdMU7XJ5iEDQNsdrZ36O9w=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'Deutsch mit Ahmad Yaghi', description: 'قاطع فيديو حول المفردات والقواعد والتحضير للامتحانات - نصائح وحيل لمزيد من الإنتاجية والوصول لأقصى أداء!', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@DeutschmitAhmadYaghi' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/SXk63ymknFbz5U8nJaD58TPvVbizNl0fjEeqtI5n5E5XH6eieZDOTeq0AxuexQ2SWwhblq0E=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'Khaled Bozan', description: 'تعلم اللغة الألمانية بأسلوب حديث ومتطور للمستوى المبتدئ والمتوسط والمتقدم.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@khaledbozan/playlists' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/ElHULyP3x9P2-_lflYQXlt0M3iDonLL-bhq_CV9gVrIgmtNDbAzE2RhVJX3WEZcJ6MCc70n9zg=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'Learn German online Germantoon', description: ' يستخدم جيرمانتون الرسوم المتحركة لشرح الكلمات والعبارات في سياقات محددة. مترجمة باللغتين الإنجليزية والعربية.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/t8xeX-SLxQBW6NSpmpiM-CIy6OeqU-Swf0pulcCL3bYiODQVWt1hEWapU5x9tiDrwWusblk5WA=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'استماعي', title: 'Coffee Break German', description: 'دروس ألمانية قصيرة لجميع المراحل، من المبتدئ إلى المتقدم. دوراتنا مصممة لمساعدتك على دمج تعلم اللغة مع جدولك المزدحم؛ نريد أن نجعل تعلم اللغة الجزء الأكثر متعة في يومك، لتتمكن من تحويل وقت فراغك إلى وقت فراغك!', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@coffeebreakgerman' },
                    //{ type: 'language', image: '#', tag: 'انجليزي', title: 'Learn', description: 'حيل', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                ] },

            {
                title: "اللغة الكورية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'language', image: 'https://ugc.production.linktr.ee/a8248168-93a0-4d3c-8a19-d83e42db7549_nYZHVxdkdF0eMJqkMet0T03IlHg-zlpk9hThIZSGYzCQEO9WfjBmpaKabxLICF2KkZ012p3-BA-s900-c-k-c0x00ffffff-no-r.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'K-Heba', description: 'ستتعلم اللغة الكورية، وسنتعرف على ثقافة وتاريخ كوريا عشاق الثقافة الكورية والكيبوب والمسلسلات الكورية.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@k-heba' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/19bdaf6f-3a46-40e4-a890-76b689f4f1a9_AIdro-lnqXPwsW3GR-g-lnM02rveebNDRyZYgmWcYT52Ibvhjjw-s900-c-k-c0x00ffffff-no-rj.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'Hailey _Your Korean Friend', description: 'تعليم اللغة الكورية باللغةالإنجليزية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@koreanfriendhailey' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/UNoH9kaDTKyKvGX_13C4mFgMbEB-EHBkSOjTMF7djmpyRL11SlqphBG2EIrw2KH9xzeXIV22Yrk=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: '샴스와 아랍 - مع شمس', description: 'القناة المتخصصة في تعليم اللغة الكورية للعرب 아랍어와 아랍 문화를 배울 수 있는 전문채널', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@-3564' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/1974161e-77d8-4bda-bacb-1e11803ca819_AIdro-lZiGOhCsZfj4GhnY0m5-0nYWUbqmp4Ucmr7cGBBY7aiUk-s900-c-k-c0x00ffffff-no-rj.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'KoreanClass101.com', description: 'الطريقة الأسرع والأسهل والأكثر متعة لتعلم اللغة الكورية باللغة الإنجليزية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@KoreanClass101' },

                ]
            },
            {
                title: "اللغة الروسية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'language', image: 'https://i.ytimg.com/vi/i48I1E9110E/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHUBoAC4AOKAgwIABABGBogYyhyMA8=&rs=AOn4CLDRH-tEWG9QRsUePQ1p3dEBMQxFlw', tag: 'تعليم', title: 'طليق', description: 'دروس تعليم اللغة الروسية من طليق', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://youtube.com/playlist?list=PLxCFn5-t8kLXoLPKuSQibRMLTqvLDualM' },
                    { type: 'language', image: 'https://scontent.fcai2-1.fna.fbcdn.net/v/t39.30808-6/339151454_1379778032812613_2015128582043652946_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Qa-tYsGT8o8Q7kNvwFWAaba&_nc_oc=AdlA0Fc8ZBjNawih8QhGnZ8b6tAJh5A0bbqbz9-bgQsoEApF_L3cdxchiOIon_9aInI&_nc_zt=23&_nc_ht=scontent.fcai2-1.fna&_nc_gid=0hQ6j6uzJO9XCtYNIZZEsw&oh=00_AfHDkc-B9jWf6zw1aKUKBxoPI9M5BaSj86mzD6fjcvpOeg&oe=680D2142', tag: 'تعليم', title: 'هبة الإبياري', description: 'تعلم اللغة الروسية مع هبه الإبياري للمبتدئين', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/channel/UC2IveZAKF4VgsahY7TqbWbg' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/AjrZxbGMTrplX8ejL2myOTRGLGdh3hbjWPJqnpPW08fhTfK855qqqDnSbeIk2NTKiq1n9DJNNVM=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'Real Russian Club', description: 'داريا أستاذة جامعية ومعلمة لغة روسية معتمدة. تقيم حاليًا وتُدرّس في كولورادو، الولايات المتحدة الأمريكية.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@realrussianclub' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/53d46378-5041-406d-8457-ed062a132557_uSwb7fHa43LpMWd0DUmyUfAAydiVJyrue0CRJknE2nZZO4l8khJ72TMSwP1VqrNSDdlG6Rvfww-s900-c-k-c0x00ffffff-no-r.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'Be Fluent in Russian', description: 'دروس تعليم اللغة الروسية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@BeFluentinRussian' },
                ]
            },
            {
                title: "اللغة الإيطالية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'language', image: 'https://yt3.googleusercontent.com/m1uyel2UxZ75pMg4gCN0G06VQnS2K3y6S6agwqgxc1rMkSswKbKA7mv4KDBXWZqG5sGJ45huSw=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'آلاء حسان الشقيفي - Egiziana Angela', description: 'مُحاضر ومُترجم لغة إيطالية تقوم بنشر كل ما هو هادف من كورسات أونلاين لنشر العلم', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@ALAAangela' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/LLiYakp759cCP1VxnGp3jJAow32_YnWcQMAe_BCyBdTqvhltvijRiVtGb85xdKK6P6ZbtEdJ5w=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'Italy Made Easy', description: 'دروس تعلم إيطالي باللغة الإنجليزية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@italymadeeasy' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/ac36554d-4eeb-422e-b2f7-30521f403dc7_AIdro-lti1lU9e5NYX0sGZgWdgPoJ0ZvgetqYE2LCZ8uaHDGcQE-s900-c-k-c0x00ffffff-no-rj.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'ItalianPod101.com', description: 'الطريقة الأسرع والأسهل والأكثر متعة لتعلم اللغة الإيطالية باللغة الإنجليزية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: 'https://yt3.googleusercontent.com/bWx9exqS9Ka6JmoK6y09qPsUBjPfZKdm1GWNrqoHuW9viv2h13caj9SLJLCX0_vP1v2Lzpvp6Es=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'italiano y2', description: 'دروس إيطالية يقدمها ياسر شاب تونسي', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@italiano_y2' },
                ]
            },
            {
                title: "اللغة التركية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'language', image: 'https://ugc.production.linktr.ee/f87554e6-f2e0-4b75-8963-004db1f06ff8_mP3ZhRIQm37K87mOiWE108CWzni5NJJCWcdHyh23n6PQf2vxS8q6yKoK-MqvtATle3ztCYslX5k-s900-c-k-c0x00ffffff-no-.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'زينب مصري', description: 'صحفية سورية مقيمة في تركيا. تقدم دروس لتعلم اللغة التركية ومنشورات منوعة من تركيا.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: 'https://i.ytimg.com/vi/XsDVeJshjdw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJjlOWvIcUOmuahz7fJWD62NWMKQ', tag: 'تعليم', title: 'طليق', description: 'دروس تعليم اللغة التركية من طليق', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLxCFn5-t8kLUU2LnDePYwLGJBA91K-K9T' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/5d19630f-362e-457e-9723-3ba854ca1d4d_sPrR0-pWeKvuQIbLydA-5eo0rqUK0tqAt-fs8w-tVVVY4cNMkEDORRpgii9CSQX7d0Fu88F7N-g-s900-c-k-c0x00ffffff-no-.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'Let\'s Practice Turkish', description: 'قناة متخصصة لتعليم اللغة التركية للعرب بطريقة جديدة وممتعة عن طريق سلسلة دروس للمبتدئين بالإضافة إلى الاختبارات والتحديات والفيديوات المتنوعة والمتعلقة باللغة التركية.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@%D8%A7%D9%84%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/db10d8c7-8ad8-4ed6-af03-26b27b45ab71_NL-mMsKfqb0bWeQj-vZpRMxioX262eLvzHHvHWYywbPAZDyoqralKb6CTD1d5fLh3ZUI7egXvBM-s900-c-k-c0x00ffffff-no-.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'Rslan Rihan', description: 'تعلم اللغة التركية بأسلوب مبسط وسلس ومنظم وفق مستويات مرتبة بقوائم التشغيل.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@RSLANRIHAN/playlists' },
                //    { type: 'language', image: '#', tag: '#', title: '#', description: '#', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                ]
            },
            {
                title: "اللغة اليابانية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'language', image: 'https://i.ytimg.com/vi/Ymoxfr_a_tA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDvPtKm_0NPEBXCNbdQbMhSvcZgMg', tag: 'تعليم', title: 'طليق', description: 'تعلم دروس اللغة اليابانية من طليق', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLxCFn5-t8kLUV2yAg6irO2o_KRs9lYHWA' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/a3f8ef51-9d5a-4824-b8e7-7c969f2d2a2c_AIdro-k6G3iZPmrYKn8sdKMAnwJI9znT35gQOE-rWFeDBDcOULjU-s900-c-k-c0x00ffffff-no-rj.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'JapanesePod101.com', description: 'الطريقة الأسرع والأسهل والأكثر متعة لتعلم اللغة اليابانية باللغة الإنجليزية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@japanesepod101' },
                    { type: 'language', image: 'https://ugc.production.linktr.ee/806c023d-fa59-4578-836b-9305dcc13f48_INO7IMKs3X7bdXDqFyk4nCQ8WMufv7KSk7LMUydvz0s-K2mjqpyvp0GWemlik2ijilrc4ebNZQ-s900-c-k-c0x00ffffff-no-r.jpeg?io=true&size=thumbnail-stack-v1_0', tag: 'تعليم', title: 'Miku Real Japanese', description: 'دروس للغة اليابانية باللغة الإنجليزية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@mikurealjapanese' },

                ]
            },
          /*  {
                title: "اللغة ",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'language', image: '#', tag: '#', title: '#', description: '#', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: '#', tag: '#', title: '#', description: '#', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: '#', tag: '#', title: '#', description: '#', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: '#', tag: '#', title: '#', description: '#', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: '#', tag: '#', title: '#', description: '#', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },
                    { type: 'language', image: '#', tag: '#', title: '#', description: '#', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: '#' },

                ]
            }*/
            ]
    },
    artificial_intelligence: {
        title: "الذكاء الاصطناعي",
        description: " تعلم الذكاء الاصطناعي لم يعد رفاهية واكب ما يحدث من حولك من تطورات وتعلم الذكاء الاصطناعي.",
        viewMoreButtonClass: "btn-primary",
        subcategories: [
        { title: "العربية", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                { type: 'AI', image: 'https://yt3.googleusercontent.com/a27IYFeJ163SmaHDiFV25wR_hH08xNci0dZdQjj1AonWyGPN9FQQ_X2mX9ITNso6bqDovEhh4qA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليمي', title: 'AI بالعربي', description: 'حابب تبقى على دراية بكل جديد في مجال ال AIيبقى انت فى المكان الصح.', buttonText: 'مشاهدة', buttonIcon: 'fa-headphones', link: 'http://www.youtube.com/@aiarab' },
                { type: 'AI', image: 'https://yt3.googleusercontent.com/ivK7_tx83ORiY2qkJwogl8CtJ8fYVNnKrWIo-2Beii8gFQh_j2ic8X9JQTQdAbfGHM4EBUXXDg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليمي', title: 'Motaz Saad', description: 'كورسات في الذكاء الاصطناعي مقدمة من قبل دكتور معتز سعد الحاصل على درجة الدكتوراة في علوم الحاسب من جامعة لورين بفرنسا.', buttonText: 'مشاهدة', buttonIcon: 'fa-headphones',  link: 'http://www.youtube.com/@MotazSaad' },
                { type: 'AI', image: 'https://yt3.googleusercontent.com/M7vMSUJiIAXTA9OpEkE_-4C0FhaZxYLh5uPz0rhw8zfd0kFG-F4tc8wkhb7nEVewq0oqpTrfW74=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليمي', title: 'cyber school', description: 'محتوى قيم في مجال الامن السيبراني.يساعدك على مواصلة رحلتك التعليمية في مجال الذكاء الاصطناعي.', buttonText: 'مشاهدة', buttonIcon: 'fa-headphones', link: 'http://www.youtube.com/@cyberschool1' },
                { type: 'AI', image: 'https://yt3.googleusercontent.com/UMn75P3RcU7fd8XbiCLUfv-6oauWlb62i-FygG7sG88uddhIXpNyquNnPcFU_I1zzoLZROi1VW4=s160-c-k-c0x00ffffff-no-rj', tag: 'تعليمي', title: 'Mustafa Othman', description: 'محتوى يساعدك على شق طريقك نحو تعلمك للذكاء الاصطناعي من خلال تقديم شرح مبسط لمفاهيمه واهم العلوم المرتبطة به.', buttonText: 'مشاهدة', buttonIcon: 'fa-headphones', link: 'http://www.youtube.com/@MustafaOthman' },
                { type: 'AI', image: 'https://yt3.googleusercontent.com/ytc/AIdro_nRziAZkYjywKrq2wM64hnaOff88aX2gY15IbqZoPQlwng=s160-c-k-c0x00ffffff-no-rj', tag: 'تعليمي', title: 'Infology', description: 'واكب ما يجري من حولك من تطورات من خلال تعلم اسخدام أدوات الذكاء الاصطناعي ..شباب بتساعد شباب يسعدهم ان يخبروك ان قناة انفولوجي هي الخيار الامثل لذلك.', buttonText: 'مشاهدة', buttonIcon: 'fa-headphones', link: 'http://www.youtube.com/@Infology1' },


            ]},
         {title: "الإنجليزية", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    {
                        type: 'AI',
                        image: 'https://yt3.googleusercontent.com/NFEbC-cLmpyyOtH6iOsI9OLgOEg4YDX_jgBZWMsyKBhoV3tMhmdHomh31AbeP7AV1su8Ac9AVw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
                        tag: 'تعليمي',
                        title: 'Siraj Raval',
                        description: 'كل ما تحتاجه واكثر لتعلم الذكاء الاصطناعي يوفره محتوى سيراج رافال من خلال ادماجك في رحلة تعليمية مليئة بالفائدة والتشويق.',
                        buttonText: 'مشاهدة',
                        buttonIcon: 'fa-headphones',
                        link: 'http://www.youtube.com/@SirajRaval'
                    },
                    {
                        type: 'AI',
                        image: 'https://yt3.googleusercontent.com/W6OveNrcBmhKztV7JqfGqJ39w65hJyWTJ-asSTRw0iRThRUQ3MzF845KkqaLjhvC8SmdBHfgMg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
                        tag: 'تعليمي',
                        title: 'TensorFlow',
                        description: 'اذا كنت مهتما حقا بتعلم الذكاء الاصطناعي فهذه القناة تعد من افضل الخيارات المتاحة لديك ..حيث انها تقدم شرح يغطي من المستوي المبتدئ وحتى المستوى الاحترافي .',
                        buttonText: 'مشاهدة',
                        buttonIcon: 'fa-headphones',
                        link: 'http://www.youtube.com/@TensorFlow'
                    },
                    {
                        type: 'AI',
                        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/2a/6192a04f1311e7ba12057425631cbc/AndrewNg-Headshot.jpg?auto=format%2Ccompress&dpr=2&w=200&h=200',
                        tag: 'تعليمي',
                        title: 'DeepLearningAI',
                        description: 'تعلم احد اهم مفاهيم الذكاء الاصطناعي وهو التعلم العميق من قبل الاب الروحي للذكاء الاصطناعي اندرو ان جي يعد فرصة تستحق الاغتنام..ماذا تنتظر ؟ابدأ الان!.',
                        buttonText: 'مشاهدة',
                        buttonIcon: 'fa-headphones',
                        link: 'https://www.youtube.com/watch?v=vStJoetOxJg&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI'
                    },
                    {
                        type: 'AI',
                        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mWT-3HaBiihhDy3TGYNqjZt-OP8PivU_lMUjdhwntZ2LM=s160-c-k-c0x00ffffff-no-rj',
                        tag: 'تعليمي',
                        title: 'sentdex',
                        description: 'قناة SENTDEX كنز حقيقي لأي شخص يريد احتراف الذكاء الاصطناعي وعلوم البيانات.باسلوب مبسط وتطبيقي .ستتعلم من مشاريع حقيقية وأمثلة عملية ..',
                        buttonText: 'مشاهدة',
                        buttonIcon: 'fa-headphones',
                        link: 'http://www.youtube.com/@sentdex'
                    },
                    {
                        type: 'AI',
                        image: 'https://yt3.googleusercontent.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s160-c-k-c0x00ffffff-no-rj',
                        tag: 'تعليمي',
                        title: '3Blue1Brown',
                        description: '3Blue1Brownقناة ستساعدك على جعل مفاهيم الذكاء الاصطناعي والرياضيات البصرية تنبض بالحياة بطريقة ممتعة ترسخ الفهم العميق في ذهنك .',
                        buttonText: 'مشاهدة',
                        buttonIcon: 'fa-headphones',
                        link: 'http://www.youtube.com/@3blue1brown'
                    },

                ]}
            ]
        },
    programming: {
        title: "البرمجة",
        description: "البرمجة هي لغة العصر وأساس التكنولوجيا اللي بنعيشها كل يوم. تخيل إنك تقدر تخلق تطبيق، تصمم موقع، أو حتى تطور لعبة بمجهودك وإبداعك. البرمجة مش مجرد كتابة أكواد، لكنها طريقة لحل المشاكل بشكل مبتكر وإبداعي. كل سطر بتكتبه بيقربك من بناء أفكارك وتحويلها لحقيقة. من تطوير الويب لتعلم الذكاء الاصطناعي، البرمجة مفتاح المستقبل اللي بيقود العالم النهارده. لو بتدور على مهارة تفتح ليك أبواب الشغل والتميز",
        viewMoreButtonClass: "btn-secondary",
        subcategories: [
            { title: "قنوات يوتيوب", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'programming',gradientClass: 'gradient-navy-based', tag: 'برمجة', title: 'Elzero Web School HTML', description: 'القناة العربية الرائدة لتعليم البرمجة وتطوير الويب! مع أسامة الزيرو، ستتعلم كل شيء من أساسيات HTML وCSS إلى البرمجة المتقدمة بـJavaScript وPython، بأسلوب بسيط وشيق. القناة تقدم شروحات تفصيلية، مشاريع عملية، ومسارات تعليمية تناسب المبتدئين والمحترفين. مع أكثر من 1.4 مليون مشترك ومئات الدروس المجانية.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@ElzeroWebSchool' },
                    { type: 'programming', image: 'https://media.licdn.com/dms/image/sync/v2/D4D27AQE-XVzBHTDHOA/articleshare-shrink_800/articleshare-shrink_800/0/1723732322031?e=1745971200&v=beta&t=svhqBnRZfXLH-fNItfmmuhUx0CtMnVGuKRqgNHMojg4', tag: 'برمجة', title: 'Codezilla', description: 'كورس تعلم أساسيات البرمجة باستخدام لغة بايثون يقدمها إسلام هشام مدرب سابق في Udacity', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://youtube.com/playlist?list=PLuXY3ddo_8nzrO74UeZQVZOb5-wIS6krJ&si=Y04HVSsVN5jgC2YR' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/Fr6wJ5_Hok0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC4Vwq5ecgqdXqJiAQ6DB9UzxbOcg', tag: 'برمجة', title: 'Basic of C++ with Mohamed El Desouki', description: 'تعلم أساسيات البرمجة باستخدام لغة الC++ يقدمها المهندس محمد الدسوقي', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://youtube.com/playlist?list=PL1DUmTEdeA6IUD9Gt5rZlQfbZyAWXd-oD&si=PWvMW2ULqiYLG5sN' },
                    { type: 'programming',gradientClass: 'gradient-grey-based', tag: 'برمجة', title: 'Mohamed El Desouki', description: 'القناة تحتوي علي أساسيات لمختلف اللغات مثل C++ , Java , Python بجانب الجوانب المتقدمة مثل ال OOP و هياكل البيانات و ما إلي ذلك', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@DesoukiEgypt' },
                    { type: 'programming',gradientClass: 'gradient-pink-based', tag: 'برمجة', title: 'Adel Nasim', description: 'القناة تقدم محتوي في أساسيات بواسطة المهندس عادل نسيم في لغات مختلفة مثل C++ و Java و بأسلوب عملي', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@AdelNasim/playlists' },
                    { type: 'programming', image: 'https://i.ibb.co/7dxXh0Ft/pa.webp', tag: 'برمجة', title: 'Programming Advices', description: 'القناة تحتوي علي محتوي ثري جدا باللغة العربية', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@ProgrammingAdvices' },
                    { type: 'programming', image: 'https://yt3.googleusercontent.com/rztdG4ptYGkgGWbECUHP5BPU_dr6YdV6c7nxecrXeecDJGVCbbJHkyy4Myd0Erqg5WCTWA9_lw=s160-c-k-c0x00ffffff-no-rj', tag: 'برمجة', title: 'كورس مقدمة عن أساسيات البرمجة للمبتدئين', description: 'دورة شاملة لتعلم أساسيات البرمجة من الصفر للمبتدئين، تشمل شرح المفاهيم البرمجية الأساسية ولغات البرمجة وأهم المهارات لدخول عالم البرمجة بثقة', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/watch?v=06h470AiBZ4' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/aK46A6jQ1RM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDrOVtaZ2fIToRZnHMP5i_-FCjazQ', tag: 'برمجة', title: 'كورس ما قبل البرمجة', description: 'سلسلة تعليمية متكاملة لتعلم البرمجة من الصفر حتى الاحتراف، مع شرح عملي لأهم المفاهيم والمهارات البرمجية للمبتدئين.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx8xKvAXpb6f0Urj98Xo7zg' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/8mAITcNt710/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAryxHqicweKG9AUTCescAVfljfHQ', tag: 'برمجة', title: 'Harvard CS50 (2023) – Full Computer Science University Course', description: 'دورة جامعة هارفارد CS50 الكاملة لعام 2023 لتعلم علوم الحاسوب والبرمجة من الصفر حتى الاحتراف، مع شرح شامل للغات البرمجة والخوارزميات وأساسيات تطوير البرمجيات', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/watch?v=LfaMVlDaQ24' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/pSc6RGEBLAQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBZO0jSrdEivHWvFrZ_4fj7eQwYw', tag: 'برمجة', title: 'كورس cs50 بالعربي', description: 'دورة CS50 الكاملة باللغة العربية لتعلم علوم الحاسوب والبرمجة من الصفر حتى الاحتراف، مع شرح مفصل للمفاهيم الأساسية والخوارزميات', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLknwEmKsW8OvMsFbU9zo8oJCprAsgc4LO' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/YMXUxKDziaA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDKb1IWsIVuEpv8Oh0diHfR8RrCrA', tag: 'برمجة', title: 'oop in c++', description: 'سلسلة مُتخصِّصة لتعميق فهم البرمجة الكائنية التوجه (OOP) بلغة C++ باللغة العربية، مع شرح منهجي مُنظَّم للمفاهيم المتقدمة والتطبيقات الاحترافية.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLCInYL3l2Aaiq1oLvi9TlWtArJyAuCVow' },
                    { type: 'programming', image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://cdn.filestackcontent.com/H8EXVSVQFubpZJH7CHUN', tag: 'برمجة', title: 'مسار باشمهندس محمد ابو هدهود التأسيسي', description: 'خارطة طريق سهلة ومرنة لاحتراف البرمجة، تقدّم لك مسارًا تعليميًّا مُنظّمًا مع نصائح عملية وتحديثات مستمرة لمواكبة أحدث متطلبات السوق', buttonText: 'زيارة الموقع', buttonIcon: 'fa-external-link-alt', link: 'https://programmingadvices.com/p/roadmap' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/Kf3H2jcllug/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBp1xmek1zwSVZUSIhkM98QVzcoIA', tag: 'برمجة', title: 'تعلم html  في 2024 | كورس كامل', description: 'دورة HTML كاملة لبناء مواقع احترافية من البداية، مع أمثلة تطبيقية لصفحات ويب متكاملة', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLoKsKWq4AoXhTr-v8fnrrWuuIiI0BTRAg' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/cSpndmwWmss/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBzCJjGRy5QQpQ8Gll0E9xsycgXAg', tag: 'برمجة', title: 'كورس HTML لاكتوكود ', description: 'كورس HTML من الصفر لتطوير  وتصميم المواقع و صفحات الويب مع OctuCode', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLoP3S2S1qTfCVIETOGwaK3lyaL3UKu403' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/Dv39fDYei9A/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBfCb6RrMz-vucx6SQvNpwuA32hsA', tag: 'برمجة', title: 'كورس HTML لعبدالرحمن جمال', description: 'html بالعربي المقدمة من قناة عبدالرحمن جمال للمجتمع ', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLknwEmKsW8OtLRQPTLms79499meY2D6ij' },
                    { type: 'programming', image: 'https://i.ytimg.com/vi/Lm6irXWjWIo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDBevrv-_iS0yo_xsJ7_fAc0RPvBA', tag: 'برمجة', title: 'كورس بايثون كامل للمبتدئين لعبدالرحمن جمال', description: 'القائمة التعليمية الشاملة "كورس بايثون كامل للمبتدئين تُعد دليلاً مثاليًا لتعلم لغة البرمجة بايثون من الصفر حتى الإحتراف.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/playlist?list=PLknwEmKsW8OsG8dnisr_-2WGyx7lpgGEE' },

                ] },

        ]
    },
    research: {
        title: "البحث العلمي و الأكاديمي",
        description: "استمع إلى مجموعة من مقاطع الفيديو التي تقدّم استراتيجيات وأدوات مبتكرة للباحثين الشباب، مع نصائح عملية لنجاح البحث العلمي والنشر الأكاديمي",
        viewMoreButtonClass: "btn-primary",
        subcategories: [
            { title: "الكتابة و البحث العلمي", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'writing', image: 'https://yt3.googleusercontent.com/E8erylSn2YodIvy8LZpiGlq4trKmTXYsfbhluJVRC5NWQY9kpPGtSxYXPWQcfoQGfQFRzl3-2A=s160-c-k-c0x00ffffff-no-rj', tag: 'كتابة أكاديمية', title: 'Ref-n-Write Academic Software', description: 'قناة يوتيوب تقدم شروحات وأدوات لتسهيل الكتابة الأكاديمية وتحسين مهارات الباحثين والطلاب.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@refnwrite' },
                    { type: 'writing', image: 'https://msgsndr-private.storage.googleapis.com/calendar-widget-logo/66dfef79-0916-4be3-95f5-7ed995ae609a.png', tag: 'كتابة أكاديمية', title: 'Academic English Now', description: 'قناة على يوتيوب تُعد مصدرًا متميزًا لدعم طلاب الدكتوراه والباحثين في كتابة ونشر أبحاثهم في المجلات العلمية ذات التأثير العالي.​', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@AcademicEnglishNow' },
                    { type: 'writing', image: 'https://yt3.googleusercontent.com/3mtu7gJNsScbcWAiklitoayzu10N73-zlV60GHWZjowVR-jZt_sswND0Q2JrKU87-m0008ec8g=s160-c-k-c0x00ffffff-no-rj', tag: 'كتابة أكاديمية', title: 'Prof. David Stuckler', description: 'قناة د. ديفيد ستكلر توفّر استراتيجيات احترافية للنشر الأكاديمي في المجلات عالية التأثير وبناء مسيرة بحثية متميزة.', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@profdavidstuckler' },
                    { type: 'writing', image: 'https://yt3.googleusercontent.com/i0YQsxBDUkziIQa3N0yElFUyaZo2H8qdJ766U21eTKdFOGnBgJ-L7X_kZ0O_Jl-f6a_ZG76nF-4=s160-c-k-c0x00ffffff-no-rj', tag: 'كتابة أكاديمية', title: 'Andy Stapleton', description: 'قناة د. آندي ستابلتون تقدم محتوى احترافيًا لدعم الباحثين في كتابة الأطروحات والنشر الأكاديمي باستخدام أحدث الأساليب والتقنيات.​', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@DrAndyStapleton' },
                    { type: 'research', image: 'https://images.squarespace-cdn.com/content/v1/63bd480690589d22053fcc6a/409fb593-2d73-4099-b7a0-9d28c963f97d/Screenshot+2023-10-18+at+09.35.05.png?format=2500w', tag: 'بحث علمي', title: 'Dr Amina Yonis', description: 'قناة د. أمينة يونيس توفّر محتوى احترافيًا لدعم الباحثين في إعداد وكتابة الأبحاث، والنشر الأكاديمي، باستخدام أدوات وتقنيات حديثة.​', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@DrAminaYonis/videos' },
                    { type: 'research', image: 'https://assets.stanwith.me/live/msc/26594955/yn6rq/img0878.jpg/webp/433x0/100/img0878.webp?width=500', tag: 'بحث علمي', title: 'Preaching P', description: 'قناة تُقدّم محتوى تعليميًا مميزًا للطلاب الطموحين، حيث يشارك تجاربه الشخصية واستراتيجياته الفعّالة في النشر البحثي، التقديم للجامعات المرموقة، وتحقيق التوازن بين الدراسة والأنشطة اللامنهجية. تُعدّ القناة مصدرًا قيمًا للإلهام والتوجيه في المسار الأكاديمي.​​', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@preachingp' },
                    { type: 'research', image: 'https://media.licdn.com/dms/image/v2/D4E03AQHwrTq9QiIFIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712518276814?e=1750896000&v=beta&t=Xlx7-kqy9UeH2KdAQJWRf19UhIGaqtBnPl0k00nGDX8', tag: 'بحث علمي', title: 'Rishab Jain', description: 'قناة ريشاب جاين توفّر دليلًا عمليًا للباحثين الشباب، من خلال استراتيجيات مبتكرة وأدوات حديثة تساعدهم على دخول عالم البحث العلمي بثقة وتميّز منذ المراحل المبكرة.​​', buttonText: 'مشاهدة', buttonIcon: 'fa-play', link: 'https://www.youtube.com/@RishabJainK' },

                ]},
            { title: "أدوات للبحث العلمي", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'research', image: 'https://scispace.com/scispace-logo.svg', tag: 'بحث علمي', title: 'SciSpace', description: 'أداة ذكاء اصطناعي تساعد على تبسيط وفهم الأوراق العلمية من خلال شرح المفاهيم المعقدة بلغة مبسطة وسهلة.', buttonText: 'زيارة الموقع', buttonIcon: 'fa-external-link-alt', link: 'https://scispace.com/?via=huong&gad_source=1&gbraid=0AAAAA-ZWuP2D8hSW65_QncjnhRVpJPH2u&gclid=CjwKCAjwn6LABhBSEiwAsNJrjt9R--vD-cTnmZvzzV7Ntf6vwO8Z-L_B_Fdm_1zBP0ICl-BYwGpyJhoC6sAQAvD_BwE' },
                    { type: 'research', image: 'https://www.napkin.ai/assets/napkin-logo-2024-beta.svg', tag: 'بحث علمي', title: 'Napkin AI', description: ' أداة ذكاء اصطناعي تساعد الباحثين والمبدعين على تنظيم الأفكار، رسم الخرائط الذهنية، واكتشاف الروابط الخفية بين المفاهيم لتوليد رؤى جديدة بذكاء وسلاسة.', buttonText: 'زيارة الموقع', buttonIcon: 'fa-external-link-alt', link: 'https://www.napkin.ai/' },
                    { type: 'research', image: 'https://www.alquiblaweb.com/wp-content/uploads/2024/10/Artboard-4-1.png', tag: 'بحث علمي', title: 'RefSeek', description: ' محرك بحث أكاديمي مصمّم خصيصًا للباحثين والطلاب، يتيح الوصول إلى ملايين الأبحاث، الكتب، المقالات، والمصادر العلمية الموثوقة من مختلف التخصصات بدون إعلانات مزعجة.', buttonText: 'زيارة الموقع', buttonIcon: 'fa-external-link-alt', link: 'https://www.refseek.com/' },
                    { type: 'research', image: 'https://www.productivitypals.co/cdn/shop/files/Sider.ai.png?v=1732121189', tag: 'بحث علمي', title: 'Sider AI', description: 'أداة ذكية تعمل كمساعد بحثي شامل، تمكّنك من تلخيص الأوراق العلمية، طرح الأسئلة بلغة طبيعية، وتحليل المحتوى الأكاديمي بسرعة ودقة', buttonText: 'زيارة الموقع', buttonIcon: 'fa-external-link-alt', link: 'https://sider.ai/' },
                    { type: 'research', image: 'https://images.squarespace-cdn.com/content/v1/5dee82c56fcd7b0290640db5/2d9c67bf-a7e9-4810-8948-45ce24546798/logo.png?format=1500w', tag: 'بحث علمي', title: 'Reserch Rabbit', description: 'أداة مبتكرة تتيح للباحثين استكشاف الأوراق العلمية وإنشاء خرائط ذكية للعلاقات بين الدراسات. تساعدك على تتبّع التطور البحثي، اكتشاف دراسات جديدة مرتبطة بموضوعك، وتنظيم مكتبتك العلمية بطريقة مرئية وتفاعلية تسهّل الفهم والتحليل.', buttonText: 'زيارة الموقع', buttonIcon: 'fa-external-link-alt', link: 'https://www.researchrabbit.ai/' },
                    { type: 'research', image: 'https://aix.car.chula.ac.th/wp-content/uploads/2024/10/connected-papers_Logo-600x600.png', tag: 'بحث علمي', title: 'Connected Papers', description: 'أداة تساعدك على بناء خريطة بصرية للأبحاث العلمية المرتبطة بموضوعك، مما يسهل استكشاف الخلفية البحثية وفهم تطور المجال.', buttonText: 'زيارة الموقع', buttonIcon: 'fa-external-link-alt', link: 'https://www.connectedpapers.com/' },

                ]}
        ]
    },
    graphicDesign: {
        title: "الجرافيك ديزاين",
        description: "مصادر وأدوات لمصممي الجرافيك المبتدئين والمحترفين.",
        viewMoreButtonClass: "btn-secondary",
        subcategories: [
            { title: "3d Design", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6", items: [
                    { type: 'graphic design', image: 'https://i.ytimg.com/vi/TdKQDTDfpCk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDpVBco5_OUo-IENGAYWK9NvzwrdA', tag: 'تعليم', title: 'دورة تعليم بلندر', description: 'من افضل القنوات لتعليم برنامج blender للمبتدئين خطوه بخطوه في فيديوهات قصيره .', buttonText: 'مشاهدة', buttonIcon: 'fa-play', details: '84 حلقة', link: 'https://youtube.com/playlist?list=PL4rJWNkyjYTexBRIATJg6JD5feiPs5em-&feature=shared' },

                            { type: 'graphic design', image: 'https://tse4.mm.bing.net/th?id=OIP.2wsRDpZYKzUJMoXomhuDOgHaEK&pid=Api&P=0&h=220', tag: 'تعليم', title: 'Blender Guru ', description: 'احترافي جدا ، مناسب للمبتدئين والمحترفين .السلسله الأشهر هي "Dount Tutorial".', buttonText: 'مشاهدة', buttonIcon: 'fa-play', details: '+17 حلقة', link: 'https://www.youtube.com/watch?v=B0J27sf9N1Y&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z'},

{ type: 'graphic design', image: ' https://tse2.mm.bing.net/th?id=OIP.BJ0jZz17PmwU5FoMv4SfIwAAAA&pid=Api&P=0&h=220', tag: 'تعليم', title: 'Grant Abbitt ', description:' بيشرح موديلينج، سكابتينج، جيم ديزاين. بسيط وسهل المتابعة', buttonText: 'مشاهدة', buttonIcon: 'fa-play', details: '+70 حلقة', link: 'https://www.youtube.com/watch?v=6KwQT_gD_FQ&list=PLn3ukorJv4vtUy-we5PXaR7V5P7YXUlHf' },

{ type: 'graphic design', image: ' https://tse2.mm.bing.net/th?id=OIP.rmwqqcpIl1EoBq4Kcztp5AHaFj&pid=Api&P=0&h=220', tag: 'تعليم', title: '[ثري دي بالعربي – مع علاء الشاهد] ', description:' شروحات شاملة لتصميم النماذج ثلاثية الأبعاد، الطباعة ثلاثية الأبعاد، ومحركات الألعاب', buttonText: 'مشاهدة', buttonIcon: 'fa-play', details: '6 حلقات', link: 'https://youtube.com/playlist?list=PLW4UMTiamRmbzE03UPnzpfvOha3KQ_yZa&si=TVdly_obysPC8dsf' },

    { type: 'graphic design', image: 'https://tse2.mm.bing.net/th?id=OIP.W5y2X1JkvRjdbUpTUIJWUAAAAA&pid=Api&P=0&h=220', tag: 'تعليم', title: 'Seif Hussam 3D ', description:'دروس مفصلة للمبتدئين، تشمل تصميم البحر، السيارات، وغيرها', buttonText: 'مشاهدة', buttonIcon: 'fa-play', details: '+50 حلقه ', link: 'https://www.youtube.com/c/SeifHussam3D' },

        { type: 'graphic design', image: ' https://static.vecteezy.com/system/resources/previews/019/514/644/original/letter-z-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg', tag: 'تعليم', title: 'Design World', description:'مشاريع تطبيقية مثل تصميم سيارة، مع شروحات مبسطة', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+72 حلقات', link: 'https://www.youtube.com/watch?v=RBh_-lwbmqg&list=PLOvQk8vn5vdgxA7iEvvByj3lpNu_0s0wl'}
    ]},
            { title: "Video Editing", itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",items: [
                    { type: 'Graphic design', image: 'https://yt3.googleusercontent.com/1tGopRajTrfrRaq3bj4Je3Y9mql4nzhQoBihifB2TBPtGXcbKvDJmJhupQqVGQnaRgoKY-U4pw=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', tag: 'تعليم', title: 'Mostafa makram TV', description:'بيبدأ بشرح الأساسيات من الصفر، وبيرفع المستوى تدريجيًا. مناسب جدًا لو لسه بتبدأي، وبيغطي برامج كتير زي Premiere وAfter Effects وDaVinci', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+100 حلقات', link: 'https://youtube.com/@mostafamakram?si=tmcHaMn2rzZSD7wu'},

                    { type: 'Graphic design', image: ' https://yt3.googleusercontent.com/79S_XtoG7A4_KeNP5eYPSiNYU7p-1fA0x0V9UOtBvMB_lizf0iD3SBw1T5OhHauGnspvQy0mmg=s160-c-k-c0x00ffffff-no-rj', tag: 'تعليم', title: 'Premiere Gal', description:'بتشرح Premiere Pro بأسلوب واضح جدًا للمبتدئين، خاصة في التعامل مع واجهة البرنامج، إضافة التأثيرات، وضبط الصوت.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+100 حلقه', link: ' https://youtube.com/@premieregal?si=6g2lQZcOWCaeVX3G'},

                    { type: 'Graphic design', image: ' https://tse1.mm.bing.net/th?id=OIP.sPHcdGp44AbbizcYFOBwlQAAAA&pid=Api&P=0&h=220 ', tag: 'تعليم', title: ' Justin Odisho ', description:' بيركز على شروحات مختصرة لتقنيات معينة داخل Premiere وAfter Effects. مش بيبدأ من الصفر، لكنه ممتاز للي عنده خلفية وعايز يتعلم تكنيكات جديدة بسرعة.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+100 حلقه',link: ' https://youtube.com/@justinodisho?si=LvEeBGCjOLtt8v2b'},

                    { type: 'Graphic design', image: ' https://yt3.googleusercontent.com/ytc/AIdro_nenpL6Ot46iNlbGOZI-tIZBoTF1Cm-BWXACN2gDAZ5Ges=s160-c-k-c0x00ffffff-no-rj', tag: 'تعليم', title: ' Cinecom.net ', description:'من أفضل القنوات للي عايز يوصل لمستوى احترافي. بيعلم خدع سينمائية، وأفكار إبداعية للمونتاج، مع استخدام واقعي لـPremiere وAfter Effects.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+100 حلقه', link: 'https://youtube.com/@cinecomcrew?si=BhFRxsa3CrKBKBc6'},

                    { type: 'Graphic design', image: ' https://yt3.googleusercontent.com/bnJYBhADbuQmi24xfSUc9NoIWUWRAF6JfNv6GBt2ZeNVh8uKk_LTD3lLu-4nDxEtNZNrciO3=s160-c-k-c0x00ffffff-no-rj', tag: 'تعليم', title: 'Peter McKinnon ', description:'مش قناة تعليم تقليدية، لكنه بيعلمك "كيف تفكر كمونتير محترف" – من ناحية سرد القصة، اختيار اللقطات، واستخدام الألوان والمؤثرات لإخراج فيديو جذاب جدًا.', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+100 حلقه', link: 'https://youtube.com/@petermckinnon?si=D2i2qjokzpV0I3bt'},

                    { type: 'Graphic design', image: 'https://yt3.googleusercontent.com/IsxgCLijHiY15tZaTEakYd1F4JngFSV1k-YgN1FDJk9j7Gb1ejCcNQ5iQSVj0nEOIjdRsOBJsQ=s160-c-k-c0x00ffffff-no-rj', tag: 'تعليم', title: 'Amr atallah – عمرو عطاالله ', description:'قناة عربية بتشرح adobe , premiere بطريقة سهله ومبسطه ', buttonText: 'استماع', buttonIcon: 'fa-headphones', details: '+20 حلقه', link: 'https://youtube.com/@amr13330?si=YtkA2bBzxMUBM3dN'},
                ]
            }


        ]}
    ,
    edu_platforms: {
        title: "مواقع هامة",
        description: "مواقع هامة لمنصات تعليمية عربية وعالمية تقدم كورسات في مجالات متعددة منها البرمجة، التصميم، اللغات، الأعمال، التنمية الذاتية، والعلوم. و أيضا مواقع العمل الحر",
        viewMoreButtonClass: "btn-secondary",
        subcategories: [
            {
                title: "منصات تعليمية عربية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'course', image: 'https://www.edraak.org/static/images/logo-light-big.87d620b0e24a.png', tag: 'موقع تعليمي', title: 'إدراك', description: 'منصة عربية توفر دورات مجانية باللغة العربية بالتعاون مع جامعات ومؤسسات تعليمية.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.edraak.org/' },
                    { type: 'course', image: 'https://www.wzzaif.com/wp-content/uploads/2022/03/%D9%8A%D9%88%D8%AC%D8%AF-%D9%87%D9%86%D8%A7%D9%83-%D9%85%D9%88%D8%A7%D8%AF-%D9%85%D8%AD%D8%AF%D8%AF%D8%A9-%D9%81%D9%8A-%D9%85%D9%86%D8%B5%D8%A9-%D8%B1%D9%88%D8%A7%D9%82.jpg', tag: 'موقع تعليمي', title: 'رواق', description: 'منصة عربية تقدم مقررات أكاديمية مجانية باللغة العربية في مجالات متنوعة.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.rwaq.org/' },
                    { type: 'course', image: 'https://ugc.production.linktr.ee/8GnNabYT3ao7LE31yvxk_g4yg29lssPCFm1jl?io=true&size=avatar-v3_0', tag: 'موقع تعليمي', title: 'ينفع', description: 'منصة تقدم محتوى تعليمي باللغة العربية في مجالات مثل التصميم، البرمجة، والتسويق.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://yanfaa.com/' },
                    { type: 'course', image: 'https://zad-academy.com/_next/static/media/logo-dark.4c2c7598.svg', tag: 'موقع تعليمي', title: 'أكاديمية زاد', description: 'منصة عربية تقدم برامج دراسية في العلوم الشرعية والفكر الإسلامي.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://zad-academy.com/'},
                ]
            },
            {
                title: "منصات تعليمية أجنبية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    { type: 'course', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrasmajabeen.com%2Fwp-content%2Fuploads%2F2023%2F04%2FHarvard-University-Free-online-courses-1024x576.png&f=1&nofb=1&ipt=d276a324920bccc93537eaf167604b12c02a73697f7c126e09c151134280a389', tag: 'موقع تعليمي', title: 'Harvard Online Courses', description: 'كورسات مقدمة من جامعة هارفارد في مجالات أكاديمية متنوعة، بعضها مجاني.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://pll.harvard.edu/catalog/free' },
                    { type: 'course', image: 'https://i.ibb.co/yFFwyGqt/mitocw.webp', tag: 'موقع تعليمي', title: 'MIT OpenCourseWare', description: 'مبادرة من MIT لنشر مقرراتها الدراسية مجانًا عبر الإنترنت.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://ocw.mit.edu/' },
                    { type: 'course', image: 'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/8f/8f/a9/8f8fa9b1-57a7-2380-b8d8-2d7444fbba51/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png', tag: 'موقع تعليمي', title: 'edX', description: 'منصة تقدم كورسات من جامعات مرموقة مثل MIT وHarvard، بعضها مجاني.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.edx.org/' },
                    { type: 'course', image: 'https://cdn.knoji.com/images/logo/saylororg.jpg?aspect=center&snap=false&width=750&height=500', tag: 'international-course', title: 'Saylor Academy', description: 'مؤسسة غير ربحية تقدم مقررات جامعية مجانية عبر الإنترنت.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.saylor.org/' },
                    { type: 'course', image: 'https://i.pinimg.com/736x/e1/6d/f9/e16df9941f744de8a0d252f7f1ef8923.jpg', tag: 'موقع تعليمي', title: 'Alison', description: 'منصة مجانية تقدم دورات تعليمية في المهارات الأساسية والمهنية.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://alison.com/' },
                    { type: 'course', image: 'https://cdn-www.bluestacks.com/bs-images/featured_com.udemy.android.jpg', tag: 'موقع تعليمي', title: 'Udemy', description: 'منصة عالمية تقدم دورات في مجالات متعددة من خلال مدربين مستقلين.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.udemy.com/?srsltid=AfmBOorOKFwJNXfJLuUENUB6MDrLyUTa5eGri1VIOsiGnsEQL1Fk2qNM' },
                    { type: 'course', image: 'https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo-2048x1152.jpg', tag: 'موقع تعليمي', title: 'Coursera', description: 'منصة تعليمية تقدم مقررات أكاديمية بالتعاون مع جامعات ومؤسسات دولية.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.coursera.org/' },
                    { type: 'course', image: 'https://peopledevelopment.leeds.ac.uk/wp-content/uploads/sites/15/2020/11/linkedin-learning-logo.jpg', tag: 'موقع تعليمي', title: 'LinkedIn Learning', description: 'منصة تقدم دورات احترافية في المهارات التقنية والإدارية.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.linkedin.com/learning/' },
                    { type: 'course', image: 'https://tinyworkshops.com/wp-content/uploads/2020/08/skillshare-logo.jpg', tag: 'موقع تعليمي', title: 'Skillshare', description: 'منصة تعليمية تركّز على المهارات الإبداعية مثل التصميم والكتابة.', buttonText: 'زيارة', buttonIcon: 'fa-external-link-alt', link: 'https://www.skillshare.com/en/?srsltid=AfmBOooPQcDzaeZcNixgt7dQChsuvR6bDa89wwGJ-POMgVnMPReN5PoI' }
                ]
            },
            { title: "منصات عمل حر العربية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-pink-based',
                        tag: 'arabic-freelance',
                        title: 'مستقل',
                        description: 'منصة عربية لعرض المشاريع وتوظيف المستقلين في مجالات مثل التصميم، الترجمة، البرمجة، والكتابة.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://mostaql.com/'
                    },
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-pink-based',
                        tag: 'arabic-freelance',
                        title: 'خمسات',
                        description: 'منصة لبيع وشراء الخدمات المصغرة في مجالات متعددة مثل التصميم والكتابة والبرمجة.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://khamsat.com/'
                    },
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-pink-based',
                        tag: 'arabic-freelance',
                        title: 'نفذلي',
                        description: 'منصة عربية تربط المستقلين بأصحاب المشاريع في مجالات التصميم والبرمجة والتسويق.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://nafezly.com/'
                    },
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-pink-based',
                        tag: 'arabic-freelance',
                        title: 'بعيد',
                        description: 'منصة وظائف عن بعد مخصصة للباحثين عن عمل في شركات عربية بدوام كامل أو جزئي.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://baaeed.com/'
                    }
                ]
            },
            {
                title: "منصات عمل حر أجنبية",
                itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
                items: [
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-grey-based',
                        tag: 'international-freelance',
                        title: 'Upwork',
                        description: 'منصة عالمية للعمل الحر تضم مشاريع من شركات وأفراد في مجالات متنوعة حول العالم.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://www.upwork.com/'
                    },
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-grey-based',
                        tag: 'international-freelance',
                        title: 'Fiverr',
                        description: 'منصة دولية للخدمات المصغرة بأسعار تبدأ من 5 دولارات وتشمل كل التخصصات الرقمية.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://www.fiverr.com/'
                    },
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-grey-based',
                        tag: 'international-freelance',
                        title: 'Freelancer',
                        description: 'أحد أقدم مواقع العمل الحر، يوفر فرص عمل بمزايدات في جميع التخصصات التقنية والإبداعية.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://www.freelancer.com/'
                    },
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-grey-based',
                        tag: 'international-freelance',
                        title: 'PeoplePerHour',
                        description: 'منصة بريطانية للعمل الحر تتيح للمستقلين تقديم خدماتهم أو التقديم على المشاريع المفتوحة.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://www.peopleperhour.com/'
                    },
                    {
                        type: 'freelance',
                        gradientClass: 'gradient-grey-based',
                        tag: 'international-freelance',
                        title: 'Toptal',
                        description: 'منصة نخبوية تقبل فقط أفضل 3% من المستقلين في مجالات مثل البرمجة والتصميم والإدارة.',
                        buttonText: 'زيارة',
                        buttonIcon: 'fa-external-link-alt',
                        link: 'https://www.toptal.com/'
                    }
                ]
            }
        ]
    },
    // documents: {
    //     title: "المستندات والكتب",
    //     description: "مجموعة متنوعة من الكتب والملخصات والأبحاث.",
    //     viewMoreButtonClass: "btn-quaternary",
    //     subcategories: [
    //         {
    //             title: "الكتب الإلكترونية",
    //             itemsContainerClass:
    //                 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
    //             items: [
    //                 {
    //                     type: "document",
    //                     image:
    //                         "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdiwanegypt.com%2Fwp-content%2Fuploads%2F2023%2F05%2F9789778280180.jpg&f=1&nofb=1&ipt=e2e62da5aac2ca90563528a17b0e4e83dd6f329b357fa5af6648b78e85e12865",
    //                     tag: "تطوير ذاتي",
    //                     title: "فن اللامبالاة: كتاب",
    //                     description: "كتاب يساعدك على التركيز.",
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     details: "272 صفحة",
    //                     rating: 4.6,
    //                     link: "https://ketabpedia.com/wp-content/uploads/2025/02/Ketabpedia.com_%D9%81%D9%86-%D8%A7%D9%84%D9%84%D8%A7%D9%85%D8%A8%D8%A7%D9%84%D8%A7%D8%A9.pdf",
    //                     subButtonText: "استماع",
    //                     subButtonIcon: "fa-headphones",
    //                     subLink: "https://ia801900.us.archive.org/10/items/20200509_20200509_2051/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%81%D9%86%20%D8%A7%D9%84%D9%84%D8%A7%D9%85%D8%A8%D8%A7%D9%84%D8%A7%D8%A9.mp3",
    //                 },
    //                 {
    //                     type: "document",
    //                     image:
    //                         "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F612NsnPkocL._SL1500_.jpg&f=1&nofb=1&ipt=3d16522f0c1159cefc203a51913eee5740da82448908ea73c0eab5352426faad",
    //                     tag: "تطوير ذاتي",
    //                     title: "العادات الذرية: ملخص",
    //                     description: "كيف تبني عادات جيدة.",
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     details: "291 صفحة",
    //                     rating: 4.9,
    //                     link: "https://ketabpedia.com/wp-content/uploads/2025/01/ketabpedia-%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A8%D8%AF%D9%8A%D8%A7-%D8%A7%D9%84%D8%B9%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%B0%D8%B1%D9%8A%D8%A9.pdf",
    //                     subButtonText: "استماع",
    //                     subButtonIcon: "fa-headphones",
    //                     subLink: "https://mp4.shabakngy.com/m/m/5S_Sjq18m4E.mp3",
    //
    //                 },
    //                 {
    //                     type: "document",
    //                     image:
    //                         "https://ketabpedia.com/wp-content/uploads/2025/03/%D8%AA%D8%AD%D9%85%D9%8A%D9%84-%D8%AC%D9%84%D8%B3%D8%A7%D8%AA-%D9%86%D9%81%D8%B3%D9%8A%D8%A9-PDF.jpg",
    //                     tag: "تطوير ذاتي",
    //                     title: "جلسات نفسية",
    //                     description: "حتى تصل إلى السكينة النفسية.",
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     details: "199 صفحة",
    //                     subButtonText: "استماع",
    //                     rating: 4.3,
    //                     subButtonIcon: "fa-headphones",
    //
    //                 },
    //                 {
    //                     type: "document",
    //                     image:
    //                         "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61YCwKnLjSL._AC_SL1500_.jpg&f=1&nofb=1&ipt=59209222706558d270be75560cd9c11d8591c3ab6b1b89ec8c4688f990e2759b",
    //                     tag: "مالية",
    //                     title: "الأب الغني والأب الفقير",
    //                     description: "ما يعلمه الأغنياء لأبنائهم.",
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     details: "244 صفحة",
    //                     rating: 4.8,
    //                     subButtonText: "استماع",
    //                     subButtonIcon: "fa-headphones",
    //
    //                 },
    //             ],
    //         },
    //         {
    //             title: "كتب الأطفال والناشئة",
    //             itemsContainerClass:
    //                 "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
    //             items: [
    //                 {
    //                     type: "document",
    //                     image: "https://i0.wp.com/shiajuniors.com/wp-content/uploads/2023/01/%D9%82%D8%B5%D8%B5-%D8%A7%D9%84%D8%A3%D9%86%D8%A8%D9%8A%D8%A7%D8%A1-%D9%84%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84-.jpg?fit=800%2C800&ssl=1",
    //                     tag: "أطفال",
    //                     title: "قصص الأنبياء للأطفال",
    //                     description: "قصص مبسطة بطريقة شيقة.",
    //                     details: "200 صفحة",
    //                     rating: 4.6,
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     link: "https://www.kotobati.com/section/%D9%82%D8%B5%D8%B5-%D8%A7%D9%84%D8%A3%D9%86%D8%A8%D9%8A%D8%A7%D8%A1",
    //                 },
    //                 {
    //                     type: "document",
    //                     image: "https://scontent.fcai19-8.fna.fbcdn.net/v/t1.6435-9/104290428_3024620447626703_4125505126243629638_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHH2wK1xOa_61Rl9PsONx2BPyh0Rp0rE8U_KHRGnSsTxcF01f0AyH6jpca0czabXasA0TpVThXG4Luww7dQTfxy&_nc_ohc=tzsG1YM-oFoQ7kNvwGUgGPC&_nc_oc=AdkZqDhtPvNgT1vsM2WrnSRxtbWULgCcsK-ReonoqUC9gb10hvAb31d6weKt2VWZdTs&_nc_zt=23&_nc_ht=scontent.fcai19-8.fna&_nc_gid=gxY4YoaWTXssM--ADk0-JQ&oh=00_AfFR4klfegR9Z87UVBpLDCmsFomn2BEhEAosX3ucMpZHHA&oe=6830CAE9",
    //                     tag: "حكايات",
    //                     title: "سلسلة ميكي والمعرفة",
    //                     description: "مزيج من الترفيه والتعليم.",
    //                     details: "150 صفحة",
    //                     rating: 4.7,
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     link: "https://books-library.website/c-Mickey-mouse-download",
    //                 },
    //                 {
    //                     type: "document",
    //                     image: "https://cdn.aseeralkotb.com/storage/media/489297/conversions/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA-%D9%85%D8%A7-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D9%86%D9%88%D9%85-2-54116-250x375-webp.webp",
    //                     tag: "حكايات",
    //                     title: "حكايات ما قبل النوم",
    //                     description: "مزيج من الترفيه والتعليم.",
    //                     buttonText: "تحميل",
    //                     details: "205 صفحة",
    //                     rating: 4.6,
    //                     buttonIcon: "fa-download",
    //                     link: "https://www.aseeralkotb.com/ar/books/%D8%AD%D9%83%D8%A7%D9%8A%D8%A7%D8%AA-%D9%85%D8%A7-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D9%86%D9%88%D9%85-2",
    //                 },
    //             ],
    //         },
    //         {
    //             title: "كتب التاريخ",
    //             itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
    //             items: [
    //                 {
    //                     type: "document",
    //                     image: "https://cdn.aseeralkotb.com/storage/media/489411/conversions/%D9%85%D9%86-%D9%81%D9%8A%D9%8A%D9%86%D8%A7-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%A3%D9%87%D8%B1%D8%A7%D9%85%D8%A7%D8%AA-54135-250x375-webp.webp",
    //                     tag: "تاريخ",
    //                     title: "من فيينا إلى الأهرامات",
    //                     description: "مغامرة تاريخية بعيون الرحالة النمساوية أيدا فايفر",
    //                     buttonText: "تحميل",
    //                     details: "300 صفحة",
    //                     rating: 4.6,
    //                     buttonIcon: "fa-download",
    //                     link: "https://www.aseeralkotb.com/ar/tags/364480?srsltid=AfmBOopw2PEZ1tquL9jOfTt5g2IXmqbeQllcmFXwn45GTMJCE9rwhie2",
    //                 },
    //                 {
    //                     type: "document",
    //                     image: "https://cdn.aseeralkotb.com/storage/media/489404/conversions/%D8%A7%D9%84%D8%A3%D9%86%D8%AF%D9%84%D8%B3-%D9%81%D9%8A-%D8%AB%D9%85%D8%A7%D9%86%D9%8A%D8%A9-%D9%82%D8%B1%D9%88%D9%86-54134-250x375-webp.webp",
    //                     tag: "تاريخ",
    //                     title: "الأندلس في ثمانية قرون",
    //                     description: "موسوعة سريعة لأهم محطات الأندلس من الفتح لحد السقوط.",
    //                     buttonText: "تحميل",
    //                     details: "235 صفحة",
    //                     rating: 4.3,
    //                     buttonIcon: "fa-download",
    //                     link: "https://www.aseeralkotb.com/ar/books/%D8%A7%D9%84%D8%A3%D9%86%D8%AF%D9%84%D8%B3-%D9%81%D9%8A-%D8%AB%D9%85%D8%A7%D9%86%D9%8A%D8%A9-%D9%82%D8%B1%D9%88%D9%86",
    //
    //                 },
    //             ],
    //         },
    //         {
    //             title: "كتب العلوم",
    //             itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
    //             items: [
    //                 {
    //                     type: "document",
    //                     image: "https://cdn.abjjad.com/pub/e716a266-8881-442c-b549-876620758ea9-192X290.png",
    //                     tag: "الفيزياء",
    //                     title: "الفيزياء بين البساطة والدهاء",
    //                     description: "كتاب يشرح أساسيات الفيزياء بطريقة مبسطة.",
    //                     buttonText: "تحميل",
    //                     rating: 4.5,
    //                     details: "350 صفحة",
    //                     buttonIcon: "fa-download",
    //                     link: "https://www.abjjad.com/book/2769354761/%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%A8%D8%B3%D8%A7%D8%B7%D8%A9-%D9%88%D8%A7%D9%84%D8%AF%D9%87%D8%A7%D8%A1",
    //
    //                 },
    //             ],
    //         },
    //         {
    //             title: "كتب الأدب العربي",
    //             itemsContainerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6",
    //             items: [
    //                 {
    //                     type: "document",
    //                     image: "https://www.noor-book.com/publice/covers_cache_webp/1/a/2/1/bb6449e969a2117cdc260159f9db1aa0.jpg.webp",
    //                     tag: "أدب",
    //                     title: "ديوان المتنبي",
    //                     description: "مجموعة من أشهر قصائد المتنبي.",
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     rating: 4.1,
    //                     details: "583 صفحة",
    //                     link: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AF%D9%8A%D9%88%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%AA%D9%86%D8%A8%D9%8A-pdf",
    //                 },
    //                 {
    //                     type: "document",
    //                     image: "https://m.media-amazon.com/images/I/61V+w6NDK8L._AC_UF894,1000_QL80_.jpg",
    //                     tag: "أدب",
    //                     title: "بين القصرين",
    //                     description: "من شهر روايات نجيب محفوظ الحائزة على جائزة نوبل.",
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     rating: 4.0,
    //                     details: "584 صفحة",
    //                     link: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%86%D8%AC%D9%8A%D8%A8-%D9%85%D8%AD%D9%81%D9%88%D8%B8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D9%82%D8%B5%D8%B1%D9%8A%D9%86-pdf",
    //                 },
    //                 {
    //                     type: "document",
    //                     image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632369819i/4591499.jpg",
    //                     tag: "أدب",
    //                     title: "قصر الشوق",
    //                     description: "من شهر روايات نجيب محفوظ الحائزة على جائزة نوبل.",
    //                     buttonText: "تحميل",
    //                     buttonIcon: "fa-download",
    //                     rating: 4.5,
    //                     details: "546 صفحة",
    //                     link: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%82%D8%B5%D8%B1-%D8%A7%D9%84%D8%B4%D9%88%D9%82-%D8%B1%D9%88%D8%A7%D9%8A%D9%87-%D9%86%D8%AC%D9%8A%D8%A8-%D9%85%D8%AD%D9%81%D9%88%D8%B8-pdf",
    //                 },
    //                 {
    //                     type: "document",
    //                     image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635078545i/4002165.jpg",
    //                     tag: "أدب",
    //                     title: "السكرية",
    //                     description: "من شهر روايات نجيب محفوظ الحائزة على جائزة نوبل.",
    //                     buttonText: "تحميل",
    //                     rating: 4.4,
    //                     details: "406 صفحة",
    //                     buttonIcon: "fa-download",
    //                     link: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D9%8A%D9%87-%D8%B1%D9%88%D8%A7%D9%8A%D9%87-%D9%86%D8%AC%D9%8A%D8%A8-%D9%85%D8%AD%D9%81%D9%88%D8%B8-pdf",
    //                 },
    //             ],
    //         },
    //     ],
    // }
};

let allSearchableTitles = [];
let currentFilter = 'all';
let searchDebounceTimeout;
let globalObserver;
let headerHeight = 80;

function prepareSearchableTitles(data) {
    const titles = new Set();
    Object.values(data).forEach(section => {
        if (section.items) { section.items.forEach(item => item.title && titles.add(item.title)); }
        if (section.subcategories) {
            section.subcategories.forEach(subcat => {
                if (subcat.items) { subcat.items.forEach(item => item.title && titles.add(item.title)); }
            });
        }
    });
    allSearchableTitles = Array.from(titles);
}
function createResourceCard(item, index) {
    if (item.type === 'document') {
        const bookTag = item.tag || 'كتاب';
        const buttonText = item.buttonText || 'تحميل';
        const buttonIcon = item.buttonIcon || 'fa-download';
        const fallbackImage = 'https://via.placeholder.com/300x400.png/eee/ccc?text=Book+Cover';

        const hasValidLink = item.link && item.link.trim() !== '';

        const cardHtml = `
        <div class="resource-card resource-card-book" style="opacity: 0; transform: translateY(20px);">
            <div class="book-flipper">
                <div class="book-front">
                    <div class="book-image-container">
                         <img src="${item.image || fallbackImage}"
                              alt="${item.title || 'Book Cover'}"
                              loading="lazy"
                              onerror="this.onerror=null; this.src='${fallbackImage}';"
                              onload="this.style.opacity=1">
                         <div class="book-cover-overlay"></div>
                         <div class="book-front-content">
                             <span class="card-tag">${bookTag}</span>
                             <h3 class="card-title">${item.title || 'عنوان الكتاب'}</h3>
                         </div>
                    </div>
                </div>
                <div class="book-back">
                    <p class="card-description">${item.description || 'لا يوجد وصف متاح لهذا الكتاب.'}</p>
                    ${hasValidLink ? /* If link is valid, render the button */ `
                    <a href="${item.link.trim()}" target="_blank" rel="noopener noreferrer" class="btn-action">
                         ${buttonText} <i class="fas ${buttonIcon} btn-icon"></i>
                    </a>
                    ` : ''
        }
                </div>
            </div>
        </div>
        `;
        return cardHtml;

    } else {
        const isNoImage = !item.image;
        const gradientClass = isNoImage ? (item.gradientClass || 'gradient-grey-based') : '';
        const cardClasses = `resource-card ${isNoImage ? `card-no-image ${gradientClass}` : ''} shine-effect`;
        const tiltAttributes = 'data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.15" data-tilt-perspective="1000"';
        const featuredTiltAttributes = 'data-tilt data-tilt-max="10" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.3" data-tilt-perspective="1000"';

        let tagClass = '';
        let baseTagClass = 'card-tag';
        if (!isNoImage) {
            switch (item.type) {
                case 'podcast': case 'featured': tagClass = 'card-tag-podcast'; break;
                case 'programming': tagClass = 'card-tag-programming'; break;
                case 'language': tagClass = 'card-tag-language'; break;
                case 'graphic': tagClass = 'card-tag-graphic'; break;
                default: tagClass = 'bg-gray-200 text-gray-700';
            }
            tagClass = `${baseTagClass} ${tagClass}`;
        } else {
            tagClass = baseTagClass;
        }

        let buttonClass = 'btn-primary';
        if (!isNoImage) {
            switch (item.type) {
                case 'programming': buttonClass = 'btn-secondary'; break;
                case 'language': buttonClass = 'btn-tertiary'; break;
                case 'graphic': buttonClass = 'btn-secondary'; break;
            }
        }

        const linkHref = item.link && item.link.trim() !== '' ? item.link.trim() : '#';

        let cardHtml = `
            <div class="${cardClasses}" ${item.type === 'featured' ? featuredTiltAttributes : tiltAttributes} style="opacity: 0; transform: translateY(20px);">
                ${!isNoImage ? `
                <div class="card-img-container">
                    <img src="${item.image || 'https://via.placeholder.com/400x300.png/eee/ccc?text=Image'}" alt="${item.title || 'Resource Image'}" loading="lazy" onload="this.style.opacity=1">
                    <div class="card-overlay"></div>
                </div>
                ` : ''}
                <div class="card-content ${isNoImage ? 'py-8 md:py-10' : ''}">
                     <span class="${tagClass}">${item.tag || ''}</span>
                    <h3 class="card-title ${isNoImage ? 'text-xl md:text-2xl' : ''}">${item.title || 'عنوان غير متوفر'}</h3>
                    <p class="${isNoImage ? 'mt-4' : 'text-sm'}">${item.description || ''}</p>
                    <div class="card-action ${isNoImage ? 'mt-6 border-t-0 pt-0' : ''}">
                         <a href="${linkHref}" ${linkHref !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn-action ${buttonClass}">
                            ${item.buttonText || 'عرض'} <i class="fas ${item.buttonIcon || 'fa-arrow-right'} btn-icon"></i>
                        </a>
                        <div class="flex items-center">
                            ${item.rating ? `<span class="text-yellow-500 ml-1"><i class="fas fa-star"></i></span><span class="${isNoImage ? 'text-white opacity-85' : 'text-gray-700'}">${item.rating}</span>` : ''}
                            ${item.details ? `<span class="text-sm ${isNoImage ? 'text-white opacity-85' : ''} ${item.rating ? 'mr-3' : ''}">${item.details}</span>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        return cardHtml;
    }
}

function renderItems(containerElement, items, isFeatured = false) {
    if (!containerElement || !items) return;
    let cardsHtml = '';
    items.forEach((item, index) => {
        const cardHtml = createResourceCard(item, index);
        cardsHtml += cardHtml;
    });
    containerElement.innerHTML = cardsHtml;
    if (typeof VanillaTilt !== 'undefined') {
        const cardsToTilt = containerElement.querySelectorAll(".resource-card[data-tilt]"); // Select only tiltable cards
        if(cardsToTilt.length > 0){
            VanillaTilt.init(cardsToTilt, { max: 8, speed: 400, glare: true, "max-glare": 0.2, perspective: 1000 }); // Keep tilt options for standard cards
        }
    }

    if(globalObserver) {
        const cardsToObserve = containerElement.querySelectorAll('.resource-card');
        if(cardsToObserve.length > 0) {
            cardsToObserve.forEach(card => {
                globalObserver.observe(card);
            });
        }
    } else {
        console.warn("Global IntersectionObserver not ready for renderItems.");
        const cardsToObserve = containerElement.querySelectorAll('.resource-card');
        cardsToObserve.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }
}

/** Builds all sections and appends them to the main container */
function buildSections(dataToRender) {
    const mainContainer = document.getElementById('main-content-area');
    const loadingIndicator = document.getElementById('loading-indicator');
    if (!mainContainer) return;
    mainContainer.innerHTML = ''; // Clear previous content

    const sectionOrder = ['featured', 'podcasts', 'languages', 'programming','artificial_intelligence','research','edu_platforms', 'documents', 'graphicDesign'];
    let sectionsBuilt = 0;

    sectionOrder.forEach(key => {
        if (!dataToRender[key] || (!dataToRender[key].items?.length && !dataToRender[key].subcategories?.some(sub => sub.items?.length > 0))) {
            return;
        }
        sectionsBuilt++;
        const sectionData = dataToRender[key];

        const sectionElement = document.createElement('section');
        sectionElement.id = key;
        sectionElement.className = 'section relative';
        sectionElement.classList.add(key === 'featured' ? 'py-12' : 'py-16');

        const categoryHeader = document.createElement('div');
        categoryHeader.className = `category-header ${key === 'featured' ? 'text-center' : ''}`;
        categoryHeader.innerHTML = `
            <h2 class="text-3xl font-bold category-title ${key === 'featured' ? 'mx-auto' : ''}">${sectionData.title}</h2>
            <p class="mt-4">${sectionData.description}</p>
        `;
        sectionElement.appendChild(categoryHeader);

        let hasContent = false;
        if (sectionData.subcategories) {
            sectionData.subcategories.forEach((subcat, subIndex) => {
                if (subcat.items && subcat.items.length > 0) {
                    hasContent = true;
                    const subcategoryContainer = document.createElement('div');
                    // Hide subcategories beyond the 3rd one initially
                    subcategoryContainer.className = `subcategory-container ${subIndex === 0 ? 'mt-8' : 'mt-12'} ${subIndex >= 3 ? 'hidden-subcategory' : ''}`;
                    subcategoryContainer.innerHTML = `<h3 class="subcategory-title">${subcat.title}</h3>`;
                    const itemsGridContainer = document.createElement('div');
                    itemsGridContainer.className = subcat.itemsContainerClass || 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6';
                    subcategoryContainer.appendChild(itemsGridContainer);
                    sectionElement.appendChild(subcategoryContainer);
                    renderItems(itemsGridContainer, subcat.items, false);
                }
            });
        } else if (sectionData.items && sectionData.items.length > 0) {
            hasContent = true;
            const itemsGridContainer = document.createElement('div');
            itemsGridContainer.className = sectionData.itemsContainerClass || 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12';
            sectionElement.appendChild(itemsGridContainer);
            renderItems(itemsGridContainer, sectionData.items, key === 'featured');
        }

        // --- Create "View More Subcategories" Button ---
        if (hasContent && key !== 'featured' && sectionData.subcategories && sectionData.subcategories.filter(s => s.items?.length > 0).length > 3) {
            const viewMoreSubcatsContainer = document.createElement('div');
            viewMoreSubcatsContainer.className = 'mt-10 text-center view-more-subcats-wrapper';
            viewMoreSubcatsContainer.innerHTML = `
                <button data-section-key="${key}" class="btn-action ${sectionData.viewMoreButtonClass || 'btn-primary'} px-8 py-3 shine-effect view-more-subcats-btn btn-view-more-subcats">
                    عرض المزيد من الأقسام الفرعية <i class="fas fa-chevron-down ml-2"></i>
                </button>
            `;
            sectionElement.appendChild(viewMoreSubcatsContainer);
        }
        // --- End View More Button ---

        if (hasContent) { mainContainer.appendChild(sectionElement); }
    });

    // Hide loading indicator or show no results message
    if(loadingIndicator) {
        if (sectionsBuilt > 0) {
            loadingIndicator.style.display = 'none';
        } else {
            mainContainer.innerHTML = '<p class="text-center py-10 text-gray-500">لا توجد نتائج تطابق بحثك أو الفلتر المحدد.</p>';
            loadingIndicator.style.display = 'none';
        }
    }
}


/** Filters platform data */
function filterPlatformData(searchTerm, originalData, activeFilter = 'all') {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    let dataToSearch = {};
    let baseData = JSON.parse(JSON.stringify(originalData)); // Deep clone

    // Determine which sections to include based on filter
    if (activeFilter === 'all') {
        dataToSearch = baseData;
    } else if (baseData[activeFilter]) {
        dataToSearch = { [activeFilter]: baseData[activeFilter] };
        // Keep 'featured' only if NO search term is active when a category is filtered
        if (lowerCaseSearchTerm === '' && baseData.featured) {
            dataToSearch.featured = baseData.featured;
        }
    } else {
        // Fallback case: if filter key is invalid, search all (or maybe just show featured if no search term?)
        if(lowerCaseSearchTerm === '' && baseData.featured) {
            dataToSearch = { featured: baseData.featured };
        } else {
            dataToSearch = baseData; // Search all if filter invalid and search term exists
        }
    }

    // If no search term, return the filtered sections as is
    if (!lowerCaseSearchTerm) {
        return dataToSearch;
    }

    // Perform text filtering on the selected sections
    const filteredData = {};
    for (const sectionKey in dataToSearch) {

        // --- Skip 'featured' section when text searching ---
        // If filter is 'all', include featured *without* filtering its content by text
        if (sectionKey === 'featured') {
            if (activeFilter === 'all') {
                filteredData[sectionKey] = JSON.parse(JSON.stringify(baseData.featured));
            }
            continue; // Move to next section (don't text-filter featured)
        }
        // --- End skip featured ---


        const section = dataToSearch[sectionKey];
        const filteredSection = { ...section, items: [], subcategories: [] }; // Initialize with empty arrays
        let sectionHasMatch = false;

        const checkMatch = (item) => item && ( // Check if item exists
            item.title?.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.description?.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.tag?.toLowerCase().includes(lowerCaseSearchTerm)
        );

        // Filter top-level items if they exist
        if (section.items && Array.isArray(section.items)) {
            filteredSection.items = section.items.filter(checkMatch);
            if (filteredSection.items.length > 0) sectionHasMatch = true;
        }

        // Filter items within subcategories
        if (section.subcategories && Array.isArray(section.subcategories)) {
            filteredSection.subcategories = section.subcategories
                .map(subcat => {
                    // Ensure subcat and subcat.items exist and are arrays
                    if (!subcat || !subcat.items || !Array.isArray(subcat.items)) {
                        return null; // Skip invalid subcategories
                    }
                    const filteredSubcatItems = subcat.items.filter(checkMatch);
                    if (filteredSubcatItems.length > 0) {
                        sectionHasMatch = true; // Mark section as having a match
                        return { ...subcat, items: filteredSubcatItems }; // Return subcat with filtered items
                    }
                    return null; // Return null if no items match in this subcat
                })
                .filter(subcat => subcat !== null); // Remove subcategories that had no matches
        }

        if (sectionHasMatch) {
            filteredData[sectionKey] = filteredSection;
        }
    }

    // If filter is 'all' and we performed a text search, add back the unfiltered 'featured' section
    // if it exists and wasn't already added.
    if (activeFilter === 'all' && lowerCaseSearchTerm && baseData.featured && !filteredData.featured) {
        filteredData.featured = JSON.parse(JSON.stringify(baseData.featured));
    }


    return filteredData;
}


// --- Function to Build Filter Buttons ---
function buildFilterButtons() {
    const container = document.getElementById('category-filter-buttons');
    if (!container) return;
    container.innerHTML = '';

    const allButton = document.createElement('button');
    allButton.className = 'btn-filter all-filter active';
    allButton.textContent = 'الكل';
    allButton.dataset.filterKey = 'all';
    container.appendChild(allButton);

    const sectionKeys = Object.keys(platformData).filter(key => key !== 'featured');
    sectionKeys.forEach(key => {
        const sectionData = platformData[key];
        if (sectionData && sectionData.title) {
            const button = document.createElement('button');
            button.className = 'btn-filter';
            button.textContent = sectionData.title;
            button.dataset.filterKey = key;
            container.appendChild(button);
        }
    });

    container.addEventListener('click', handleFilterClick);
}

// --- Event Handler for Filter Buttons ---
function handleFilterClick(event) {
    const clickedButton = event.target.closest('.btn-filter');
    if (!clickedButton) return;

    const filterKey = clickedButton.dataset.filterKey;
    const allButtons = document.querySelectorAll('#category-filter-buttons .btn-filter');

    allButtons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');

    currentFilter = filterKey;

    const searchInput = document.getElementById('search-input');
    const currentSearchTerm = searchInput ? searchInput.value.trim() : '';
    performSearch(currentSearchTerm); // Re-filter with the new category
}

// --- Function to Programmatically Click a Filter Button ---
function triggerFilter(filterKey) {
    const filterButton = document.querySelector(`#category-filter-buttons .btn-filter[data-filter-key="${filterKey}"]`);
    if (filterButton) {
        filterButton.click(); // Simulate click
    } else {
        console.warn(`Filter button for key "${filterKey}" not found.`);
        // Optionally fallback to 'all' filter if specific key fails
        const allButton = document.querySelector(`#category-filter-buttons .btn-filter[data-filter-key="all"]`);
        if(allButton) allButton.click();
    }
}

// --- Function to Perform Search and Re-render ---
function performSearch(term) {
    const loadingIndicator = document.getElementById('loading-indicator');
    const mainContainer = document.getElementById('main-content-area');

    console.log(`Filtering for "${term}" within category: ${currentFilter}`);
    if(loadingIndicator) loadingIndicator.style.display = 'block';
    if(mainContainer) mainContainer.innerHTML = ''; // Clear content before rendering

    // Use requestAnimationFrame to ensure DOM updates happen smoothly
    requestAnimationFrame(() => {
        const filteredResults = filterPlatformData(term, platformData, currentFilter);
        buildSections(filteredResults);
        if(loadingIndicator) loadingIndicator.style.display = 'none';
    });
}


// --- INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', function() {

    // --- Define global observer ---
    globalObserver = new IntersectionObserver((entries, observer) => { // Pass observer
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                // Calculate delay based on index for non-featured cards
                const cardIndex = Array.from(element.parentNode.children).indexOf(element);
                const delay = parseInt(element.getAttribute('data-delay') || '0', 10);
                const isFeaturedCard = element.closest('#featured') !== null;
                const totalDelay = (!isFeaturedCard && element.classList.contains('resource-card') ? cardIndex * 50 : 0) + delay;

                setTimeout(() => {
                    element.classList.add('is-visible'); // Add visibility class
                    // element.style.opacity = '1'; // Use class instead
                    // element.style.transform = 'translateY(0)'; // Use class instead
                }, totalDelay);

                observer.unobserve(element); // Unobserve after animation
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 }); // Adjust threshold if needed


    prepareSearchableTitles(platformData);
    buildFilterButtons();
    buildSections(platformData); // Initial build

    // --- Initialize Header & Mobile Nav Logic (Aligned with index.html) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMobileNav = document.getElementById('close-mobile-nav');
    const header = document.getElementById('main-header');
    const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

    if (header) {
        headerHeight = header.offsetHeight; // Get initial height
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 50;
            header.classList.toggle('scrolled', scrolled);
            // Update headerHeight if it changes significantly (rare)
            headerHeight = header.offsetHeight;
        }, { passive: true });
    }

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', () => {
            mobileNav.classList.remove('hidden', 'translate-x-full');
            mobileNav.classList.add('translate-x-0', 'open'); // Add 'open' for CSS targeting if needed
        });
    }

    const closeMenu = () => {
        if (mobileNav) {
            mobileNav.classList.remove('translate-x-0', 'open');
            mobileNav.classList.add('translate-x-full');
            // Use transitionend to add 'hidden' after animation completes
            mobileNav.addEventListener('transitionend', () => {
                mobileNav.classList.add('hidden');
            }, { once: true });
        }
    };

    if (closeMobileNav) { closeMobileNav.addEventListener('click', closeMenu); }
    mobileNavLinks.forEach(link => {
        // Close menu only for links navigating *within* the page
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', closeMenu);
        }
    });
    // --- End Header & Mobile Nav Logic ---

    // Initialize Typed.js
    const typedElement = document.getElementById('typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: ['بودكاست تعليمي', 'دورات برمجة', 'تعلم اللغات', 'كتب ومستندات', 'محتوى جرافيك', 'محتوى عربي متميز'],
            typeSpeed: 60, backSpeed: 30, backDelay: 1500, startDelay: 500, loop: true
        });
    } else if (!typedElement) {
        console.warn("Typed.js target element #typed-text not found.");
    } else {
        console.warn("Typed.js library not loaded yet.");
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Add extra offset
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                } else {
                    console.warn(`Smooth scroll target element with ID "${targetId}" not found.`);
                }
            } else if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            // Allow normal navigation for external links or links to other pages (like index.html#...)
        });
    });


    // Button Ripples
    document.body.addEventListener('click', function(e) {
        const button = e.target.closest('.btn-action'); // Target ripple-enabled buttons
        if (button && !button.classList.contains('view-more-subcats-btn')) { // Exclude view more button
            const existingRipple = button.querySelector('.ripple');
            if (existingRipple) { existingRipple.remove(); } // Remove previous ripple if exists

            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            button.appendChild(ripple);

            // Clean up ripple element after animation
            setTimeout(() => {
                ripple.remove();
            }, 600); // Match animation duration
        }
    });

    // Lazy Loading Image Fade-in Trigger
    document.addEventListener('load', (e) => {
        if (e.target.tagName === 'IMG' && e.target.getAttribute('loading') === 'lazy') {
            if (e.target.naturalWidth > 0) { // Check if image loaded successfully
                e.target.style.opacity = 1;
            } else {
                console.warn("Lazy loaded image failed to load:", e.target.src);
                // Optionally set a fallback image or style
            }
        }
    }, true); // Use capture phase

    // --- Search & Autocomplete Initialization ---
    const searchInput = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('autocomplete-suggestions');
    if (searchInput && suggestionsContainer) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim().toLowerCase();
            suggestionsContainer.innerHTML = ''; // Clear previous suggestions

            if (searchTerm.length > 0) {
                // Determine the source titles based on the current filter
                let sourceTitles = [];
                if (currentFilter === 'all') {
                    sourceTitles = allSearchableTitles;
                } else if (platformData[currentFilter]) {
                    const titlesInSection = new Set();
                    const section = platformData[currentFilter];
                    if (section.items) { section.items.forEach(item => item.title && titlesInSection.add(item.title)); }
                    if (section.subcategories) {
                        section.subcategories.forEach(subcat => {
                            if(subcat.items){ subcat.items.forEach(item => item.title && titlesInSection.add(item.title)); }
                        });
                    }
                    sourceTitles = Array.from(titlesInSection);
                }

                // Filter source titles and limit suggestions
                const matchingTitles = sourceTitles.filter(title => title.toLowerCase().includes(searchTerm)).slice(0, 5); // Limit to 5 suggestions

                // Display suggestions
                if (matchingTitles.length > 0) {
                    matchingTitles.forEach(title => {
                        const suggestionDiv = document.createElement('div');
                        suggestionDiv.textContent = title;
                        suggestionDiv.addEventListener('mousedown', () => { // Use mousedown to register click before blur hides suggestions
                            searchInput.value = title;
                            suggestionsContainer.style.display = 'none';
                            performSearch(title); // Perform search when suggestion is clicked
                        });
                        suggestionsContainer.appendChild(suggestionDiv);
                    });
                    suggestionsContainer.style.display = 'block'; // Show container
                } else {
                    suggestionsContainer.style.display = 'none'; // Hide if no matches
                }
            } else {
                suggestionsContainer.style.display = 'none'; // Hide if search term is empty
            }

            // Debounce search execution
            clearTimeout(searchDebounceTimeout);
            searchDebounceTimeout = setTimeout(() => {
                // Don't trigger search on every keystroke if using autocomplete click
                // performSearch(searchTerm); // Perform search after delay only if not clicking autocomplete
            }, 300); // 300ms delay
        });

        // Hide suggestions on blur (with a small delay to allow click)
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                suggestionsContainer.style.display = 'none';
            }, 150); // Delay to allow mousedown event on suggestion
        });

        // Handle Enter key press for search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission if inside a form
                clearTimeout(searchDebounceTimeout); // Cancel any pending debounced search
                performSearch(this.value.trim()); // Perform search immediately
                suggestionsContainer.style.display = 'none'; // Hide suggestions
                this.blur(); // Remove focus from input
            }
        });
    } else {
        console.warn("Search input or suggestions container not found.");
    }
    // --- End Search & Autocomplete ---

    // --- Event Listener for "View More Subcategories" Buttons ---
    const mainContentArea = document.getElementById('main-content-area');
    if (mainContentArea) {
        mainContentArea.addEventListener('click', function(event) {
            const viewMoreBtn = event.target.closest('.view-more-subcats-btn');
            if (viewMoreBtn) {
                const sectionKey = viewMoreBtn.dataset.sectionKey;
                if (sectionKey) {
                    const sectionElement = document.getElementById(sectionKey);
                    if (sectionElement) {
                        const hiddenSubcats = sectionElement.querySelectorAll('.hidden-subcategory');
                        hiddenSubcats.forEach(subcat => {
                            subcat.classList.remove('hidden-subcategory');
                            subcat.style.opacity = '0'; // Start animation from invisible
                            subcat.style.animation = 'fadeIn 0.5s ease forwards'; // Add fade-in animation

                            // Re-observe revealed cards using the global observer
                            const cardsToObserve = subcat.querySelectorAll('.resource-card');
                            if(globalObserver && cardsToObserve.length > 0) {
                                cardsToObserve.forEach(card => globalObserver.observe(card));
                            }
                        });
                        viewMoreBtn.parentElement.remove(); // Remove the button's wrapper div
                    }
                }
            }
        });
    }
    // --- End View More Subcategories Listener ---

    // --- Footer Filter Trigger Listener ---
    const footerElement = document.querySelector('footer');
    if(footerElement) {
        footerElement.addEventListener('click', function(event) {
            const filterTriggerLink = event.target.closest('.filter-trigger');
            if (filterTriggerLink) {
                event.preventDefault(); // Prevent default link behavior
                const filterKey = filterTriggerLink.dataset.filter;
                if(filterKey) {
                    triggerFilter(filterKey); // Activate the corresponding filter button
                    // Scroll to the main content area after triggering filter
                    const targetElement = document.getElementById('main-content-area'); // Or '#category-filter-buttons'
                    if(targetElement) {
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                }
            }
        });
    }
    // --- End Footer Filter Trigger Listener ---


    // --- Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('.fade-in').forEach(el => {
        if(globalObserver) globalObserver.observe(el);
    });
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent default context menu
    });

    document.addEventListener('keydown', function(event) {
        // F12
        if (event.key === 'F12' || event.keyCode === 123) {
            event.preventDefault();
        }

        if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.keyCode === 73)) {
            event.preventDefault();
        }

        if (event.ctrlKey && event.shiftKey && (event.key === 'J' || event.key === 'j' || event.keyCode === 74)) {
            event.preventDefault();
        }

        if (event.ctrlKey && event.shiftKey && (event.key === 'C' || event.key === 'c' || event.keyCode === 67)) {
            event.preventDefault();
        }

        if (event.ctrlKey && (event.key === 'U' || event.key === 'u' || event.keyCode === 85)) {
            event.preventDefault();
        }
    });
}); // End DOMContentLoaded