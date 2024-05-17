module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['Amar Jamai Koi 😿 Gum Asa Na ']
},
             {
    timer: '1:00:00 AM',
    message: ['😒']
},
						{
    timer: '2:00:00 AM',
    message: ['Kaw Nai?']
},
						 {
    timer: '3:00:00 AM',
    message: ['~এখন রাত ২টা বাজে যারা ছ্যাকা খাইছে তারা জেগে আছে🫠🫠।']
},
						 {
    timer: '4:00:00 AM',
    message: ['~এখন রাত ৩টা বাজে সবাই মনে হয় ঘুম🥹 আমার ভাই ঘুম আসে না  ']
},
						 {
    timer: '5:00:00 AM',
    message: ['~এখন রাত ৪টা বাজে একটু পর ফজরের আযান দিলে নামাজ পড়ে নিও সবাই ']
},
						 {
    timer: '6:00:00 AM',
    message: ['Good Morning 🌄 ']
},
						 {
    timer: '7:00:00 AM',
    message: ['Good morning 2']
},
						 {
    timer: '8:00:00 AM',
    message: ['Good Morning 3 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['GOOD MORNING']
},
             {
    timer: '10:00:00 AM',
    message: ['Koi Sobai 😾' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['Siuuuu স্কুল নাই তোর ? ']
},
						 {
    timer: '12:00:00 PM',
    message: [' এতো গরম ক্যা 😑']
},					
						 {
    timer: '1:00:00 PM',
    message: [' 😞 ']
},
						 {
    timer: '2:00:00 PM',
    message: ['Kera Bolod ']
},
						 {
    timer: '3:00:00 PM',
    message: [' গুরুপের সব মেয়ে আমার 😁🌚']
},
						 {
    timer: '4:00:00 PM',
    message: ['Muri Ka ']
},
						{
    timer: '5:00:00 PM',
    message: ['😌']
},
						 {
    timer: '6:00:00 PM',
    message: ['']
},
						 {
    timer: '7:00:00 PM',
    message: ['']
},
             {
    timer: '8:00:00 PM',
    message: [' Hey Bby Ra Koi Sob']
},
             {
    timer: '9:00:00 PM',
    message: [' আমার শোনার বাংলা পরের লাইন কি 😁']
},
             {
    timer: '10:00:00 PM',
    message: [' পড়তে বয় যা ভাগ ']
},
            {
    timer: '11:00:00 PM',
    message: [' ব্রেন নাই পেরাও নাই 🙂']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
