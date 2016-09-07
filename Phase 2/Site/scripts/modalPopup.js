var offsetTop = $(window).height() * 0.1;

$("a[rel*=leanModal]").leanModal({ top : offsetTop, overlay : 0.4, closeButton: ".modal_close" });

var bioInfo = {
	'alum-Isabella-name' : 'ISABELLA GIANCARLO',
	'alum-Isaac-name'    : 'ISAAC BLACKENSMITH',
	'alum-Joanna-name'   : 'JOANNA ZHANG',
	'alum-Katharine-name': 'KATHARINE LI',
	'alum-Lily-name'     : 'LILY MATTHEWS',
	'alum-Mark-name'     : 'MARK TOWILL',
	'alum-Matt-name'     : 'MATT SEVERSON',
	'alum-Mike-name'     : 'MIKE ENG',
	'alum-Minsoo-name'   : 'MINSOO THIGPEN',
	'alum-Raaj-name'     : 'RAAJ PAREKH',
	'alum-Sophia-name'   : 'SOPHIA YANG',
	'alum-Tim-name'      : 'TIM DINGMAN',
	'alum-Veronica-name' : 'VERONICA CLARKSON',
	'alum-Yan-name'      : 'YAN LIANG',
	
	'alum-Isabella-img' : 'url(images/alumni/Isabella.png)',
	'alum-Isaac-img'    : 'url(images/alumni/Isaac.png)',
	'alum-Joanna-img'   : 'url(images/alumni/Joanna.png)',
	'alum-Katharine-img': 'url(images/alumni/Katharine.png)',
	'alum-Lily-img'     : 'url(images/alumni/Lily.png)',
	'alum-Mark-img'     : 'url(images/alumni/Mark.png)',
	'alum-Matt-img'     : 'url(images/alumni/Matt.png)',
	'alum-Mike-img'     : 'url(images/alumni/Mike.png)',
	'alum-Minsoo-img'   : 'url(images/alumni/Minsoo.png)',
	'alum-Raaj-img'     : 'url(images/alumni/Raaj.jpg)',
	'alum-Sophia-img'   : 'url(images/alumni/Sophia.png)',
	'alum-Tim-img'      : 'url(images/alumni/Tim.png)',
	'alum-Veronica-img' : 'url(images/alumni/Veronica.png)',
	'alum-Yan-img'      : 'url(images/alumni/Yan.png)',
	
	'alum-Isabella-bio' : "I'll be starting as a Project Manager at Love&War at the end of the month, but most excitingly I just launched this project and have gotten some pretty cool press about it (you can see the links at the bottom of the page)!",
	'alum-Isaac-bio'    : "Isaac Blankensmith designer from Seattle, living in Brooklyn. He graduated from Rhode Island School of Design in 2013. He now works as an industrial designer at Google Creative Lab. www.isaacblankensmith.com",
	'alum-Joanna-bio'   : "I'm in the Big Apple these days -- and actually my work is directly connected to Better World, i.e. I have the immense honor and pleasure of working with one of our speakers from 2011, Trung Le who runs an education/design studio called Wonder by Design. It's a grand ol' time. I'm also a server part-time at a neighborhood restaurant because there's something special about serving food to strangers.",
	'alum-Katharine-bio': "I'm currently working as an engineer in the Bay Area for a product development firm that designs appropriate medical technologies for developing country settings.",
	'alum-Lily-bio'     : "Lily lives and works in the San Francisco Bay Area facilitating design workshops and social impact programming for students and Fortune 500 employees globally -- while stirring up theater and mischief on the side.",
	'alum-Mark-bio'     : "This past year I competed in the Volvo Ocean Race, a 9-month, 40,000 mile sailing race around the world. I am currently working on securing sponsorship to enter the next edition of the race in 2017.",
	'alum-Matt-bio'     : "Matt is on Google’s Business Development team and has led partnerships for some of Google's most exciting new business ideas such as Google Helpouts, Project Loon, Google Cultural Institute, and a confidential early-stage clean energy project. He is also Founder and Board Chair of The School Fund, a nonprofit funding platform that has provided scholarships to over 1,300 high school students in Kenya, Tanzania and throughout the developing world.",
	'alum-Mike-bio'     : "I’ve been doing user experience design for companies small and large, wrangling complicated problems like property management accounting and health insurance claims processing and making them a bit better for people who have to deal with them every day. I also have enjoyed teaching / mentoring youth at places like Inspiring Minds and New Urban Arts. I bike commute or take public transportation just about everywhere, and I enjoy all forms of human powered transportation like cross country skiing and kayaking. I reside in Cranston, RI with my wife, Emily, our cat, Kepler, and a school of Guppies, collectively known as The Lightning.",
	'alum-Minsoo-bio'   : "Minsoo is a fourth year Brown RISD dual degree student studying Painting and Engineering. She loves pummelos and fuzzy colorful socks.",
	'alum-Raaj-bio'     : "Public Sector Strategy Consultant for Deloitte Consulting in Washington, DC.",
	'alum-Sophia-bio'   : "I recently joined the Integrated Design and Management program at MIT where I have the opportunity to cross traditional academic boundaries and get a holistic view on how design, engineering and business function together throughout the product design and development process. Previous to MIT, I worked as an UX designer with clients such as Akamai Technologies, Salesforce, and EMC. I received my bachelor of arts degree in industrial design at RISD.",
	'alum-Tim-bio'      : "I'm one of the co-founders of Castle, a startup in Detroit that manages rental properties using automation and on-demand labor.",
	'alum-Veronica-bio' : "Since graduating from Brown in 2012, Veronica has worked in consulting at the intersection of business and government at DC-based boutique consulting firm Avascent, and in the solar industry at San Francisco-based Solar Engine where she focused on creating a financing solution to enable more homeowners to put solar on the roof. She is now pursuing an MBA at the Kellogg School of Management at Northwestern University.",
	'alum-Yan-bio'      : ""
};

function populateModal(elt) {
	var id = elt.parent('.personProfile').attr('id');
	var name = bioInfo[id + '-name'];
	var img = bioInfo[id + '-img'];
	var bio = bioInfo[id + '-bio'];
	
	var modal = $("#modalPopup");
	
	modal.find('.personImg').css('background-image', img);
	modal.find('.name').html(name);
	modal.find('.bio').html(bio);
}