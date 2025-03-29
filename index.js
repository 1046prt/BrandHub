const brandsData = [
// Processor Brands
{name: 'NVIDIA', category: 'Processor', description: 'Graphics Processing Technology', logo: 'Images/nv.png', website: 'https://www.nvidia.com', famous: true},
{name: 'AMD', category: 'Processor', description: 'Advanced Micro Devices', logo: 'Images/amd.png', website: 'https://www.amd.com', famous: true},
{name: 'Intel', category: 'Processor', description: 'Semiconductor Manufacturer', logo: 'Images/intel.png', website: 'https://www.intel.com', famous: true},
{name: 'Qualcomm', category: 'Processor', description: 'Wireless Technology & Semiconductors', logo: 'Images/qualcomm.png', website: 'https://www.qualcomm.com'},
{name: 'Mediatek', category: 'Processor', description: 'Semiconductor Company', logo: 'Images/media.jpg', website: 'https://www.mediatek.com'},

// EdTech Course Brands
{name: 'Udemy', category: 'EdTech Course', description: 'Online Learning Platform', logo: 'Images/DEMY.jpg', website: 'https://www.udemy.com', famous: true},
{name: 'Great Learning', category: 'EdTech Course', description: 'Professional Learning Platform', logo: 'Images/gl.png', website: 'https://www.greatlearning.in'},
{name: 'EC Council', category: 'EdTech Course', description: 'Cybersecurity Training', logo: 'Images/eccouncil.png', website: 'https://www.eccouncil.org'},
{name: 'edX', category: 'EdTech Course', description: 'Online Course Platform', logo: 'Images/edx.png', website: 'https://www.edx.org'},
{name: 'LinkedIn Learning', category: 'EdTech Course', description: 'Professional Skills Training', logo: 'Images/linkd.jpg', website: 'https://www.linkedin.com/learning', famous: true},

// Banking Brands
{name: 'World Bank', category: 'Banking', description: 'International Financial Institution', logo: 'Images/worldbank.png', website: 'https://www.worldbank.org'},
{name: 'Swiss Bank', category: 'Banking', description: 'Swiss Banking Services', logo: 'Images/swiss bank.png', website: 'https://www.swissbanking.org'},
{name: 'Bank of Europe', category: 'Banking', description: 'European Banking', logo: 'Images/eu.png', website: 'https://www.ecb.europa.eu'},
{name: 'JPMorgan Chase', category: 'Banking', description: 'Financial Services', logo: 'Images/jpm.png', website: 'https://www.chase.com', famous: true},
{name: 'Bank of America', category: 'Banking', description: 'Banking and Financial Services', logo: 'Images/bankofamerica.png', website: 'https://www.bankofamerica.com', famous: true},
{name: 'Citigroup', category: 'Banking', description: 'Global Financial Services', logo: 'Images/citigroup.png', website: 'https://www.citigroup.com'},
{name: 'Wells Fargo', category: 'Banking', description: 'Banking and Financial Services', logo: 'Images/wellfargo.png', website: 'https://www.wellsfargo.com'},
{name: 'HSBC', category: 'Banking', description: 'International Banking', logo: 'Images/hsbc.png', website: 'https://www.hsbc.com'},

// Services Brands
{name: 'Tata Consultancy Services', category: 'Services', description: 'IT Services and Consulting', logo: 'Images/tcs.jpg', website: 'https://www.tcs.com', famous: true},
{name: 'Wipro', category: 'Services', description: 'IT Services and Consulting', logo: 'Images/wipro.png', website: 'https://www.wipro.com'},
{name: 'Infosys', category: 'Services', description: 'IT Consulting and Services', logo: 'Images/infosys.png', website: 'https://www.infosys.com'},
{name: 'IBM', category: 'Services', description: 'Technology and Consulting', logo: 'Images/ibm.png', website: 'https://www.ibm.com', famous: true},
{name: 'Tech Mahindra', category: 'Services', description: 'IT Services and Consulting', logo: 'Images/techmah.png', website: 'https://www.techmahindra.com'},
{name: 'Capgemini', category: 'Services', description: 'Consulting and Technology Services', logo: 'Images/capegemini.png', website: 'https://www.capgemini.com'},

// Healthcare Brands
{name: 'UnitedHealth Group', category: 'Healthcare', description: 'Healthcare Services', logo: 'Images/health.png', website: 'https://www.unitedhealthgroup.com'},
{name: 'CVS Health', category: 'Healthcare', description: 'Healthcare and Pharmacy', logo: 'Images/cvs.png', website: 'https://www.cvshealth.com', famous: true},
{name: 'Mankind Pharma', category: 'Healthcare', description: 'Pharmaceutical Company', logo: 'Images/mankind.png', website: 'https://www.mankindpharma.com'},
{name: 'Sun Pharmaceutical', category: 'Healthcare', description: 'Pharmaceutical Manufacturing', logo: 'Images/sunp.png', website: 'https://www.sunpharma.com'},
{name: 'Abbott', category: 'Healthcare', description: 'Medical Devices and Healthcare', logo: 'Images/abbott.png', website: 'https://www.abbott.com'},
{name: 'Cipla', category: 'Healthcare', description: 'Pharmaceutical Company', logo: 'Images/cipla.png', website: 'https://www.cipla.com'},

// Automobiles Brands
{name: 'Jaguar', category: 'Automobiles', description: 'Luxury Car Manufacturer', logo: 'Images/jaug.png', website: 'https://www.jaguar.in'},
{name: 'Alfa Romeo', category: 'Automobiles', description: 'Italian Automobile Manufacturer', logo: 'Images/alpha.png', website: 'https://www.alfaromeo.com'},
{name: 'Porsche', category: 'Automobiles', description: 'Sports Car Manufacturer', logo: 'Images/porche.jpg', website: 'https://www.porsche.com'},
{name: 'AMG', category: 'Automobiles', description: 'High-Performance Automotive Division', logo: 'Images/amg.png', website: 'https://www.mercedes-amg.com'},
{name: 'Dodge', category: 'Automobiles', description: 'American Automobile Manufacturer', logo: 'Images/dodge.png', website: 'https://www.dodge.com'},
{name: 'Mercedes', category: 'Automobiles', description: 'Luxury Automobile Manufacturer', logo: 'Images/mercedes.jpg', website: 'https://www.mercedes-benz.com', famous: true},
{name: 'Maserati', category: 'Automobiles', description: 'Luxury Sports Car Manufacturer', logo: 'Images/maserati.png', website: 'https://www.maserati.com'},
{name: 'Cadillac', category: 'Automobiles', description: 'Luxury Vehicle Division', logo: 'Images/cadillac.jpg', website: 'https://www.cadillac.com'},
{name: 'Chevrolet', category: 'Automobiles', description: 'American Automobile Division', logo: 'Images/che.jpg', website: 'https://www.chevrolet.com'},
{name: 'Tesla', category: 'Automobiles', description: 'Electric Vehicle Manufacturer', logo: 'Images/tesla.png', website: 'https://www.tesla.com', famous: true},

// Construction Brands
{name: 'L&T (Larsen & Toubro)', category: 'Construction', description: 'Engineering and Construction Company', logo: 'Images/lt.png', website: 'https://www.larsentoubro.com'},
{name: 'Adani', category: 'Construction', description: 'Infrastructure and Construction', logo: 'Images/adani.png', website: 'https://www.adani.com'},
{name: 'Aditya Birla', category: 'Construction', description: 'Multinational Conglomerate', logo: 'Images/aditya.png', website: 'https://www.adityabirla.com'},
{name: 'JSW Infrastructure', category: 'Construction', description: 'Infrastructure Development', logo: 'Images/jsw.png', website: 'https://www.jswinfra.com'},
{name: 'Tata Projects', category: 'Construction', description: 'Infrastructure and Construction', logo: 'Images/tata.png', website: 'https://www.tataprojects.com'},
{name: 'Jindal Steel & Power', category: 'Construction', description: 'Steel and Power Infrastructure', logo: 'Images/jindal.png', website: 'https://www.jindalsteelpower.com'},

// Bike Brands
{name: 'BMW', category: 'Bike', description: 'Motorcycle and Automobile Manufacturer', logo: 'Images/bmw.jpg', website: 'https://www.bmw-motorrad.in/en/models/modeloverview.html'},
{name: 'Harley-Davidson', category: 'Bike', description: 'American Motorcycle Manufacturer', logo: 'Images/harley.png', website: 'https://www.harley-davidson.com'},
{name: 'Jawa', category: 'Bike', description: 'Motorcycle Manufacturer', logo: 'Images/jawa.png', website: 'https://www.jawamotorcycles.com'},
{name: 'Indian Motorcycle', category: 'Bike', description: 'American Motorcycle Manufacturer', logo: 'Images/indian.png', website: 'https://www.indianmotorcycle.com'},
{name: 'Royal Enfield', category: 'Bike', description: 'Motorcycle Manufacturer', logo: 'Images/re.png', website: 'https://www.royalenfield.com'},
{name: 'Yamaha', category: 'Bike', description: 'Motorcycle and Vehicle Manufacturer', logo: 'Images/yamaha.png', website: 'https://www.yamaha.com'},
{name: 'Ola', category: 'Bike', description: 'Electric Mobility Company', logo: 'Images/ola.png', website: 'https://www.ola.com'},

// Accommodation Brands
{name: 'Brevistay', category: 'Accommodation', description: 'Short-term Accommodation Platform', logo: 'Images/bervi.png', website: 'https://www.brevistay.com'},
{name: 'OYO', category: 'Accommodation', description: 'Hospitality Platform', logo: 'Images/oyo.png', website: 'https://www.oyorooms.com'},
{name: 'MakeMyTrip', category: 'Accommodation', description: 'Online Travel Platform', logo: 'Images/makemy.png', website: 'https://www.makemytrip.com'},
{name: 'Goibibo', category: 'Accommodation', description: 'Online Travel Booking', logo: 'Images/goibibo.png', website: 'https://www.goibibo.com'},
{name: 'Agoda', category: 'Accommodation', description: 'Travel Accommodation Platform', logo: 'Images/agoda.png', website: 'https://www.agoda.com'},
{name: 'Airbnb', category: 'Accommodation', description: 'Lodging Marketplace', logo: 'Images/airbnb.png', website: 'https://www.airbnb.com'},
{name: 'Booking.com', category: 'Accommodation', description: 'Online Travel Booking', logo: 'Images/booking.png', website: 'https://www.booking.com'},
{name: 'Cleartrip', category: 'Accommodation', description: 'Travel Booking Platform', logo: 'Images/clearmytrip.png', website: 'https://www.cleartrip.com'},

// Online Payment Brands
{name: 'PhonePe', category: 'Online Payment', description: 'Digital Payment Platform', logo: 'Images/pp.jpg', website: 'https://www.phonepe.com'},
{name: 'Google Pay', category: 'Online Payment', description: 'Digital Payment Service', logo: 'Images/gp.jpg', website: 'https://pay.google.com'},
{name: 'Paytm', category: 'Online Payment', description: 'Mobile Payment and Financial Services', logo: 'Images/paytm.png', website: 'https://www.paytm.com'},
{name: 'AmPay', category: 'Online Payment', description: 'Payment Services', logo: 'Images/ampay.png', website: 'https://www.ampayus.com/'},
{name: 'Cred', category: 'Online Payment', description: 'Credit Card Payment Platform', logo: 'Images/cred.jpg', website: 'https://www.cred.club'},
{name: 'FamPay', category: 'Online Payment', description: 'Digital Payment for Young Users', logo: 'Images/fampay.jpg', website: 'https://www.fampay.in'},
{name: 'BHIM', category: 'Online Payment', description: 'Digital Payment Platform', logo: 'Images/bhim.png', website: 'https://www.bhimupi.org.in'},

// Streaming Brands
{name: 'Netflix', category: 'Streaming', description: 'Online Streaming Platform', logo: 'Images/netflix.png', website: 'https://www.netflix.com'},
{name: 'Prime Video', category: 'Streaming', description: 'Amazon Prime Video Streaming', logo: 'Images/prime.jpg', website: 'https://www.primevideo.com'},
{name: 'Jio Cinema', category: 'Streaming', description: 'Jio Digital Video Platform', logo: 'Images/jio.png', website: 'https://www.jiocinema.com'},
{name: 'Zee5', category: 'Streaming', description: 'Digital Video Platform', logo: 'Images/zee5.png', website: 'https://www.zee5.com'},
{name: 'JioHotstar', category: 'Streaming', description: 'Streaming Entertainment Platform', logo: 'Images/jiohot.jpg', website: 'https://www.hotstar.com'},
{name: 'Sony LIV', category: 'Streaming', description: 'Digital Media Platform', logo: 'Images/sony.jpg', website: 'https://www.sonyliv.com'},

// Apparel Brands
{name: 'Allen Solly', category: 'Apparel', description: 'Clothing Brand', logo: 'Images/allensol.jpg', website: 'https://www.allensolly.com'},
{name: 'LV (Louis Vuitton)', category: 'Apparel', description: 'Luxury Fashion House', logo: 'Images/lv.jpg', website: 'https://in.louisvuitton.com/eng-in/homepage'},
{name: 'Levi\'s', category: 'Apparel', description: 'Denim and Casual Wear', logo: 'Images/levi.png', website: 'https://levi.in/'},
{name: 'Adidas', category: 'Apparel', description: 'Sports Apparel and Footwear', logo: 'Images/adidas.png', website: 'https://www.adidas.co.in/'},
{name: 'Arrow', category: 'Apparel', description: 'Clothing and Fashion', logo: 'Images/arrow.jpg', website: 'https://arrow1851.com/'},
{name: 'Calvin Klein', category: 'Apparel', description: 'Fashion and Lifestyle Brand', logo: 'Images/cel.png', website: 'https://www.calvinklein.com'},
{name: 'Columbia', category: 'Apparel', description: 'Outdoor Apparel and Sportswear', logo: 'Images/columbia.jpg', website: 'https://www.columbia.com'},
{name: 'Jack & Jones', category: 'Apparel', description: 'Fashion Clothing Brand', logo: 'Images/jj.png', website: 'https://www.jackjones.com'},
{name: 'Louis Philippe', category: 'Apparel', description: 'Men\'s Fashion Brand', logo: 'Images/lp.png', website: 'https://www.louisphilippe.com'},
{name: 'Puma', category: 'Apparel', description: 'Sports and Lifestyle Brand', logo: 'Images/puma.png', website: 'https://www.puma.com'},

// Social Media Brands
{name: 'X', category: 'Social Media', description: 'Microblogging Platform', logo: 'Images/x.png', website: 'https://x.com'},
{name: 'Discord', category: 'Social Media', description: 'Communication Platform for Communities', logo: 'Images/discord.png', website: 'https://discord.com'},
{name: 'WhatsApp', category: 'Social Media', description: 'Messaging & Voice Call App', logo: 'Images/whatsapp.png', website: 'https://www.whatsapp.com'},
{name: 'Telegram', category: 'Social Media', description: 'Cloud-Based Messaging App', logo: 'Images/telegram.jpg', website: 'https://telegram.org'},

// Food Brands
{name: 'Oats', category: 'Food', description: 'Breakfast Cereal Products', logo: 'Images/oats.jpg', website: 'https://www.quakeroats.com'},
{name: 'Nestle', category: 'Food', description: 'Multinational Food & Beverage Company', logo: 'Images/nestle.png', website: 'https://www.nestle.com', famous: true},
{name: 'Unilever', category: 'Food', description: 'Consumer Goods Company', logo: 'Images/unilever.jpg', website: 'https://www.unilever.com', famous: true},
{name: 'ITC', category: 'Food', description: 'Diversified Conglomerate', logo: 'Images/itc.jpg', website: 'https://www.itcportal.com'},
{name: 'Britannia', category: 'Food', description: 'Food & Beverage Company', logo: 'Images/britannia.png', website: 'https://www.britannia.co.in'},
{name: 'Godrej', category: 'Food', description: 'Indian Conglomerate', logo: 'Images/godrej.jpg', website: 'https://www.godrej.com', famous: true},

// Coffee Brands
{name: 'Nescafé', category: 'Coffee', description: 'Instant Coffee Brand', logo: 'Images/nescafe.png', website: 'https://www.nescafe.com', famous: true},
{name: 'Lavazza', category: 'Coffee', description: 'Italian Coffee Brand', logo: 'Images/lavazza.png', website: 'https://www.lavazza.com'},
{name: 'Starbucks', category: 'Coffee', description: 'Coffeehouse Chain', logo: 'Images/starbucks.png', website: 'https://www.starbucks.com', famous: true},
{name: 'Sleepy Owl Coffee', category: 'Coffee', description: 'Premium Coffee Brand', logo: 'Images/sleepyowl.png', website: 'https://sleepyowl.co'},
{name: 'Caribou Coffee', category: 'Coffee', description: 'Specialty Coffee Company', logo: 'Images/caribou.jpg', website: 'https://www.cariboucoffee.com'},
{name: 'Continental Coffee', category: 'Coffee', description: 'Coffee Manufacturer', logo: 'Images/conti.png', website: 'https://www.continentalcoffee.com'},
{name: 'Death Wish Coffee', category: 'Coffee', description: 'Strong Coffee Brand', logo: 'Images/deathwish.png', website: 'https://www.deathwishcoffee.com'},
{name: 'Tata Coffee', category: 'Coffee', description: 'Coffee Producer', logo: 'Images/tatacoffee.jpg', website: 'https://www.tatacoffee.com', famous: true},
{name: 'Alps Coffee', category: 'Coffee', description: 'Italian Coffee Roaster', logo: 'Images/alps.png', website: 'https://www.alpscoffee.it'},

// Quick Commerce Brands
{name: 'Blinkit', category: 'Quick Commerce', description: 'Instant Delivery Platform', logo: 'Images/blinkit.png', website: 'https://blinkit.com', famous: true},
{name: 'Swiggy Instamart', category: 'Quick Commerce', description: 'Grocery Delivery Service', logo: 'Images/instamart.png', website: 'https://www.swiggy.com/instamart'},
{name: 'Zepto', category: 'Quick Commerce', description: '10-Minute Grocery Delivery', logo: 'Images/zepto.png', website: 'https://www.zeptonow.com'},
{name: 'Dunzo', category: 'Quick Commerce', description: 'Hyperlocal Delivery Service', logo: 'Images/dunzo.png', website: 'https://www.dunzo.com'},
{name: 'BigBasket', category: 'Quick Commerce', description: 'Online Grocery Store', logo: 'Images/bigbasket.png', website: 'https://www.bigbasket.com', famous: true},

// Food Delivery Brands
{name: 'Zomato', category: 'Food Delivery', description: 'Online Food Delivery Platform', logo: 'Images/zomato.png', website: 'https://www.zomato.com', famous: true},
{name: 'Uber Eats', category: 'Food Delivery', description: 'Food Delivery Service', logo: 'Images/ubereats.png', website: 'https://www.ubereats.com', famous: true},
{name: 'Swiggy', category: 'Food Delivery', description: 'Food Ordering & Delivery Platform', logo: 'Images/swiggy.png', website: 'https://www.swiggy.com'},
{name: 'Grubhub', category: 'Food Delivery', description: 'Online Food Ordering Platform', logo: 'Images/grubhub.png', website: 'https://www.grubhub.com'},
{name: 'DoorDash', category: 'Food Delivery', description: 'Food Delivery Service', logo: 'Images/doordash.png', website: 'https://www.doordash.com'},
{name: 'Foodpanda', category: 'Food Delivery', description: 'Online Food Delivery Service', logo: 'Images/foodpanda.png', website: 'https://www.foodpanda.com'},
{name: 'Domino\'s', category: 'Food Delivery', description: 'Pizza Delivery Chain', logo: 'Images/dominos.png', website: 'https://www.dominos.com', famous: true},
{name: 'Deliveroo', category: 'Food Delivery', description: 'Food Delivery Company', logo: 'Images/deliveroo.png', website: 'https://deliveroo.com'},
{name: 'Postmates', category: 'Food Delivery', description: 'Delivery Service', logo: 'Images/postmates.png', website: 'https://postmates.com'},
{name: 'Just Eat', category: 'Food Delivery', description: 'Online Food Ordering Service', logo: 'Images/justeat.png', website: 'https://www.just-eat.com'},
{name: 'Faasos', category: 'Food Delivery', description: 'Food Delivery Brand', logo: 'Images/faasos.png', website: 'https://www.faasos.com'},
{name: 'EatClub', category: 'Food Delivery', description: 'Food Delivery Service', logo: 'Images/eatclub.png', website: 'https://eatclub.com'},
{name: 'Pizza Hut', category: 'Food Delivery', description: 'Pizza Restaurant Chain', logo: 'Images/pizzahut.png', website: 'https://www.pizzahut.com'},
{name: 'ChowNow', category: 'Food Delivery', description: 'Online Ordering System', logo: 'Images/chownow.png', website: 'https://www.chownow.com'},
{name: 'Delivery Hero', category: 'Food Delivery', description: 'Online Food Ordering Company', logo: 'Images/deliveryhero.png', website: 'https://www.deliveryhero.com'},

// Perfume Brands
{name: 'BELLAVITA', category: 'Perfume', description: 'Fragrance Brand', logo: 'Images/bellavita.png', website: 'https://www.bellavita.com', famous: true},
{name: 'Beardo', category: 'Perfume', description: 'Men\'s Grooming Brand', logo: 'Images/beardo.jpg', website: 'https://www.beardo.in'},
{name: 'Man Company', category: 'Perfume', description: 'Men\'s Grooming Products', logo: 'Images/mancompany.png', website: 'https://www.themancompany.com', famous: true},
{name: 'Wild Stone', category: 'Perfume', description: 'Fragrance & Personal Care', logo: 'Images/wildstone.png', website: 'https://www.wildstone.in'},
{name: 'Embark', category: 'Perfume', description: 'Fragrance Collection', logo: 'Images/embark.png', website: 'https://www.embark.com'},
{name: 'Jaguar', category: 'Perfume', description: 'Luxury Fragrances', logo: 'Images/jaguar.png', website: 'https://www.jaguar-fragrances.com'},
{name: 'Nautica', category: 'Perfume', description: 'Lifestyle Fragrances', logo: 'Images/nautica.png', website: 'https://www.nautica.com'},
{name: 'Davidoff', category: 'Perfume', description: 'Luxury Fragrances', logo: 'Images/davidoff.png', website: 'https://www.zinodavidoff.com'},
{name: 'Dior', category: 'Perfume', description: 'Luxury Fashion & Fragrances', logo: 'Images/dior.png', website: 'https://www.dior.com'},
{name: 'Calvin Klein', category: 'Perfume', description: 'Fashion & Fragrances', logo: 'Images/ck.png', website: 'https://www.calvinklein.com'},

// Laptop Brands
{name: 'Apple', category: 'Laptop', description: 'MacBook Manufacturer', logo: 'Images/apple.png', website: 'https://www.apple.com'},
{name: 'Dell', category: 'Laptop', description: 'Computer Technology Company', logo: 'Images/dell.png', website: 'https://www.dell.com', famous: true},
{name: 'HP', category: 'Laptop', description: 'Information Technology Company', logo: 'Images/hp.png', website: 'https://www.hp.com'},
{name: 'Lenovo', category: 'Laptop', description: 'Multinational Technology Company', logo: 'Images/lenovo.png', website: 'https://www.lenovo.com'},
{name: 'Asus', category: 'Laptop', description: 'Computer & Phone Hardware', logo: 'Images/asus.png', website: 'https://www.asus.com', famous: true},
{name: 'Acer', category: 'Laptop', description: 'Hardware & Electronics Corporation', logo: 'Images/acer.png', website: 'https://www.acer.com'},
{name: 'Microsoft Surface', category: 'Laptop', description: 'Computing Devices Line', logo: 'Images/surface.jpg', website: 'https://www.microsoft.com/surface', famous: true},
{name: 'MSI', category: 'Laptop', description: 'Gaming Laptop Manufacturer', logo: 'Images/msi.png', website: 'https://www.msi.com', famous: true},

// Smartphone Brands
{name: 'Apple', category: 'Smartphone', description: 'iPhone Manufacturer', logo: 'Images/apple.png', website: 'https://www.apple.com', famous: true},
{name: 'Samsung', category: 'Smartphone', description: 'Electronics Corporation', logo: 'Images/samsung.png', website: 'https://www.samsung.com', famous: true},
{name: 'Xiaomi', category: 'Smartphone', description: 'Electronics Company', logo: 'Images/xomi.png', website: 'https://www.mi.com'},
{name: 'Oppo', category: 'Smartphone', description: 'Consumer Electronics Manufacturer', logo: 'Images/oppo.png', website: 'https://www.oppo.com'},
{name: 'Vivo', category: 'Smartphone', description: 'Smartphone Manufacturer', logo: 'Images/vivo.png', website: 'https://www.vivo.com'},
{name: 'Huawei', category: 'Smartphone', description: 'Telecommunications Company', logo: 'Images/huawei.png', website: 'https://www.huawei.com'},
{name: 'Nokia', category: 'Smartphone', description: 'Telecommunications Company', logo: 'Images/nokia.png', website: 'https://www.nokia.com'},
{name: 'Motorola', category: 'Smartphone', description: 'Telecommunications Company', logo: 'Images/motorola.png', website: 'https://www.motorola.com'},
{name: 'LG', category: 'Smartphone', description: 'Electronics Corporation', logo: 'Images/lg.png', website: 'https://www.lg.com'},
{name: 'Sony', category: 'Smartphone', description: 'Multinational Conglomerate', logo: 'Images/sony.png', website: 'https://www.sony.com'},
{name: 'OnePlus', category: 'Smartphone', description: 'Smartphone Manufacturer', logo: 'Images/oneplus.png', website: 'https://www.oneplus.com'},
{name: 'Realme', category: 'Smartphone', description: 'Smartphone Brand', logo: 'Images/realme.png', website: 'https://www.realme.com'},
{name: 'Nothing', category: 'Smartphone', description: 'Consumer Technology Company', logo: 'Images/nothing.png', website: 'https://nothing.tech'},
{name: 'Google', category: 'Smartphone', description: 'Pixel Phone Manufacturer', logo: 'Images/pixel.png', website: 'https://store.google.com'},

// Delivery Partner Brands
{name: 'FedEx', category: 'Delivery', description: 'Multinational Delivery Services', logo: 'Images/fedex.png', website: 'https://www.fedex.com'},
{name: 'DHL', category: 'Delivery', description: 'International Courier Service', logo: 'Images/dhl.png', website: 'https://www.dhl.com', famous: true},
{name: 'UPS', category: 'Delivery', description: 'Multinational Shipping & Logistics', logo: 'Images/ups.png', website: 'https://www.ups.com'},
{name: 'Blue Dart', category: 'Delivery', description: 'Courier & Logistics Company', logo: 'Images/bluedart.png', website: 'https://www.bluedart.com'},
{name: 'DTDC', category: 'Delivery', description: 'Express Delivery Service', logo: 'Images/dtsc.png', website: 'https://www.dtdc.com', famous: true},
{name: 'Aramex', category: 'Delivery', description: 'Logistics & Transportation Company', logo: 'Images/aramex.png', website: 'https://www.aramex.com'},
{name: 'Ecom Express', category: 'Delivery', description: 'E-commerce Logistics Solutions', logo: 'Images/ecomexpress.png', website: 'https://ecomexpress.in'},

// Communication Brands
{ name: 'Jio', category: 'Communication', description: 'Telecommunications Company', logo: 'Images/jioc.png', website: 'https://www.jio.com' },
{ name: 'Vodafone', category: 'Communication', description: 'Telecommunications Company', logo: 'Images/vodafone.png', website: 'https://www.vodafone.com', famous: true },
{ name: 'Starlink', category: 'Communication', description: 'Satellite Internet Constellation', logo: 'Images/starlink.png', website: 'https://www.starlink.com', famous: true},
{ name: 'Airtel', category: 'Communication', description: 'Telecommunications Company', logo: 'Images/airtel.png', website: 'https://www.airtel.com' },
{ name: 'BSNL', category: 'Communication', description: 'State-owned Telecommunications Company', logo: 'Images/bsnl.png', website: 'https://www.bsnl.co.in' , famous: true },
{ name: 'T-Mobile', category: 'Communication', description: 'Telecommunications Company', logo: 'Images/tmobile.png', website: 'https://www.t-mobile.com'  },
{ name: 'Verizon', category: 'Communication', description: 'Telecommunications Company', logo: 'Images/verizon.png', website: 'https://www.verizon.com', famous: true},
{ name: 'AT&T', category: 'Communication', description: 'Telecommunications Company', logo: 'Images/att.png', website: 'https://www.att.com' },
{ name: 'Sprint', category: 'Communication', description: 'Telecommunications Company', logo: 'Images/sprint.png', website: 'https://www.sprint.com'},

// Insurance
{ name: 'State Farm', category: 'Insurance', description: 'Insurance and Financial Services', logo: 'Images/statefarm.png', website: 'https://www.statefarm.com' },
{ name: 'Allstate', category: 'Insurance', description: 'Insurance Company', logo: 'Images/allstate.png', website: 'https://www.allstate.com', famous: true},
{ name: 'AIG', category: 'Insurance', description: 'American International Group', logo: 'Images/aig.png', website: 'https://www.aig.com'},
{ name: 'Prudential', category: 'Insurance', description: 'Financial Services and Insurance', logo: 'Images/prudential.png', website: 'https://www.prudential.com' },
{ name: 'MetLife', category: 'Insurance', description: 'Insurance and Financial Services', logo: 'Images/metlife.png', website: 'https://www.metlife.com' },
{ name: 'Geico', category: 'Insurance', description: 'Auto Insurance Company', logo: 'Images/geico.png', website: 'https://www.geico.com'},
{ name: 'Progressive', category: 'Insurance', description: 'Insurance Company', logo: 'Images/progressive.png', website: 'https://www.progressive.com' },
{ name: 'Liberty Mutual', category: 'Insurance', description: 'Insurance Company', logo: 'Images/libertymutual.png', website: 'https://www.libertymutual.com', famous: true },

// Gaming
{ name: 'Nintendo', category: 'Gaming', description: 'Video Game Company', logo: 'Images/nintendo.png', website: 'https://www.nintendo.com' },
{ name: 'Sony PlayStation', category: 'Gaming', description: 'Video Game Console', logo: 'Images/playstation.png', website: 'https://www.playstation.com', famous: true },
{ name: 'Microsoft Xbox', category: 'Gaming', description: 'Video Game Console', logo: 'Images/xbox.png', website: 'https://www.xbox.com' },
{ name: 'Activision Blizzard', category: 'Gaming', description: 'Video Game Developer', logo: 'Images/activision.png', website: 'https://www.activision.com', famous: true },
{ name: 'Electronic Arts', category: 'Gaming', description: 'Video Game Company', logo: 'Images/ea.png', website: 'https://www.ea.com' },
{ name: 'Epic Games', category: 'Gaming', description: 'Video Game Developer', logo: 'Images/epicgames.png', website: 'https://www.epicgames.com' , famous: true},
{ name: 'Riot Games', category: 'Gaming', description: 'Video Game Developer', logo: 'Images/riotames.png', website: 'https://www.riotgames.com' },

// Energy
{ name: 'ExxonMobil', category: 'Energy', description: 'Oil and Gas Corporation', logo: 'Images/exxonmobil.png', website: 'https://www.exxonmobil.com', famous: true},
{ name: 'Chevron', category: 'Energy', description: 'Energy Corporation', logo: 'Images/chevron.png', website: 'https://www.chevron.com' },
{ name: 'BP', category: 'Energy', description: 'Oil and Gas Company', logo: 'Images/bp.png', website: 'https://www.bp.com', famous: true },
{ name: 'Shell', category: 'Energy', description: 'Oil and Gas Company', logo: 'Images/shell.png', website: 'https://www.shell.com'},
{ name: 'TotalEnergies', category: 'Energy', description: 'Energy Company', logo: 'Images/totalenergies.png', website: 'https://totalenergies.com', famous: true},
{ name: 'ConocoPhillips', category: 'Energy', description: 'Oil and Gas Company', logo: 'Images/concophilps.png', website: 'https://www.conocophillips.com'},
{ name: 'Eni', category: 'Energy', description: 'Oil and Gas Company', logo: 'Images/eni.png', website: 'https://www.eni.com' },
{ name: 'Equinor', category: 'Energy', description: 'Energy Company', logo: 'Images/equinor.png', website: 'https://www.equinor.com' },

// Beauty and Personal Care
{ name: 'L\'Oréal', category: 'Beauty and Personal Care', description: 'Cosmetics and Beauty Company', logo: 'Images/loreal.png', website: 'https://www.loreal.com', famous: true },
{ name: 'Estée Lauder', category: 'Beauty and Personal Care', description: 'Beauty and Cosmetics Company', logo: 'Images/estee.png', website: 'https://www.esteelauder.com'},
{ name: 'Procter & Gamble', category: 'Beauty and Personal Care', description: 'Consumer Goods Company', logo: 'Images/pg.png', website: 'https://www.pg.com' },
{ name: 'Unilever', category: 'Beauty and Personal Care', description: 'Consumer Goods Company', logo: 'Images/unilever.jpg', website: 'https://www.unilever.com' },
{ name: 'Nivea', category: 'Beauty and Personal Care', description: 'Skincare Brand', logo: 'Images/nivea.png', website: 'https://www.nivea.com', famous: true },
{ name: 'Revlon', category: 'Beauty and Personal Care', description: 'Cosmetics Company', logo: 'Images/revlon.png', website: 'https://www.revlon.com' },
{ name: 'Clinique', category: 'Beauty and Personal Care', description: 'Skincare and Cosmetics', logo: 'Images/clinique.png', website: 'https://www.clinique.com' },
{ name: 'Dove', category: 'Beauty and Personal Care', description: 'Personal Care Brand', logo: 'Images/dove.png', website: 'https://www.dove.com', famous: true },

// Home Appliances
{ name: 'Whirlpool', category: 'Home Appliances', description: 'Home Appliance Manufacturer', logo: 'Images/whirlpool.png', website: 'https://www.whirlpool.com', famous: true },
{ name: 'GE Appliances', category: 'Home Appliances', description: 'Home Appliance Manufacturer', logo: 'Images/ge.png', website: 'https://www.geappliances.com' },
{ name: 'Bosch', category: 'Home Appliances', description: 'Engineering and Technology Company', logo: 'Images/bosch.png', website: 'https://www.bosch-home.com' },
{ name: 'Electrolux', category: 'Home Appliances', description: 'Home Appliance Manufacturer', logo: 'Images/electrolux.png', website: 'https://www.electrolux.com' },
{ name: 'Samsung', category: 'Home Appliances', description: 'Electronics and Home Appliances', logo: 'Images/samsung.png', website: 'https://www.samsung.com' },
{ name: 'LG Electronics', category: 'Home Appliances', description: 'Home Appliances and Electronics', logo: 'Images/lg.png', website: 'https://www.lg.com', famous: true },
{ name: 'Frigidaire', category: 'Home Appliances', description: 'Home Appliance Manufacturer', logo: 'Images/frigidaire.png', website: 'https://www.frigidaire.com'},
{ name: 'KitchenAid', category: 'Home Appliances', description: 'Kitchen Appliances', logo: 'Images/kitchenaid.png', website: 'https://www.kitchenaid.com' },

// E-commerce
{ name: 'Amazon', category: 'E-commerce', description: 'Online Retail Company', logo: 'Images/amazon.png', website: 'https://www.amazon.com', famous: true },
{name:'Flipkart',category:'E-commerce',description:'Online Retail Company',logo:'Images/flipkart.png',website:'https://www.flipkart.com',famous:true},
{ name: 'Alibaba', category: 'E-commerce', description: 'E-commerce Company', logo: 'Images/alibaba.png', website: 'https://www.alibaba.com', famous: true },
{ name: 'eBay', category: 'E-commerce', description: 'Online Auction and Shopping', logo: 'Images/ebay.png', website: 'https://www.ebay.com' },
{ name: 'Shopify', category: 'E-commerce', description: 'E-commerce Platform', logo: 'Images/shopify.png', website: 'https://www.shopify.com', famous: true },
{ name: 'Rakuten', category: 'E-commerce', description: 'E-commerce Company', logo: 'Images/rakuten.png', website: 'https://www.rakuten.com' },
{ name: 'Walmart', category: 'E-commerce', description: 'Retail Corporation with Online Shopping', logo: 'Images/walmart.png', website: 'https://www.walmart.com', famous: true },

// Environmental Services
{ name: 'Veolia', category: 'Environmental Services', description: 'Global Environmental Services Company', logo: 'Images/veolia.png', website: 'https://www.veolia.com' },
{ name: 'Republic Services', category: 'Environmental Services', description: 'Waste Management Company', logo: 'Images/republicservices.png', website: 'https://www.republicservices.com' },
{ name: 'Clean Harbors', category: 'Environmental Services', description: 'Environmental and Hazardous Waste Services', logo: 'Images/cleanharbors.png', website: 'https://www.cleanharbors.com' },
{ name: 'Covanta', category: 'Environmental Services', description: 'Sustainable Waste and Energy Solutions', logo: 'Images/covanta.png', website: 'https://www.covanta.com' , famous: true},
{ name: 'SUEZ', category: 'Environmental Services', description: 'Water and Waste Management Services', logo: 'Images/suez.png', website: 'https://www.suez.com' },
{name:'Stantec',category:'Environmental Services',description:'sustainable engineering, architecture, and environmental consulting',logo:'Images/stantec.png',website:'https://www.stantec.com'},

// Cryptocurrency and Blockchain
{ name: 'Bitcoin', category: 'Cryptocurrency', description: 'Decentralized Digital Currency', logo: 'Images/bitcoin.png', website: 'https://bitcoin.org' , famous: true},
{ name: 'Ethereum', category: 'Cryptocurrency', description: 'Decentralized Platform for Smart Contracts', logo: 'Images/ethereum.png', website: 'https://ethereum.org' },
{ name: 'Ripple (XRP)', category: 'Cryptocurrency', description: 'Digital Payment Protocol', logo: 'Images/ripple.png', website: 'https://ripple.com' },
{ name: 'Litecoin', category: 'Cryptocurrency', description: 'Peer-to-Peer Cryptocurrency', logo: 'Images/litecoin.png', website: 'https://litecoin.org' },
{ name: 'Cardano', category: 'Cryptocurrency', description: 'Blockchain Platform for Smart Contracts', logo: 'Images/cardano.png', website: 'https://cardano.org' },
{ name: 'Binance', category: 'Cryptocurrency', description: 'Cryptocurrency Exchange', logo: 'Images/binance.png', website: 'https://www.binance.com' },

// Digital Marketing
{ name: 'HubSpot', category: 'Digital Marketing', description: 'Inbound Marketing and Sales Software', logo: 'Images/hubspot.png', website: 'https://www.hubspot.com' },
{ name: 'Mailchimp', category: 'Digital Marketing', description: 'Email Marketing Service', logo: 'Images/mailchimp.png', website: 'https://mailchimp.com' },
{ name: 'SEMrush', category: 'Digital Marketing', description: 'SEO and Marketing Analytics', logo: 'Images/semrush.png', website: 'https://www.semrush.com' },
{ name: 'Hootsuite', category: 'Digital Marketing', description: 'Social Media Management Platform', logo: 'Images/hootsuite.png', website: 'https://hootsuite.com' },
{ name: 'Moz', category: 'Digital Marketing', description: 'SEO Software and Tools', logo: 'Images/moz.png', website: 'https://moz.com' },

// Fitness and Wellness
{ name: 'Planet Fitness', category: 'Fitness and Wellness', description: 'Gym and Fitness Center', logo: 'Images/planetfitness.png', website: 'https://www.planetfitness.com' },
{ name: 'Anytime Fitness', category: 'Fitness and Wellness', description: '24-Hour Gym', logo: 'Images/anytime.png', website: 'https://www.anytimefitness.com' , famous: true},
{ name: 'Gold\'s Gym', category: 'Fitness and Wellness', description: 'Fitness Center', logo: 'Images/goldsgym.png', website: 'https://www.goldsgym.com' },
{ name: 'LA Fitness', category: 'Fitness and Wellness', description: 'Health Club', logo: 'Images/lafitness.png', website: 'https://www.lafitness.com' },
{ name: '24 Hour Fitness', category: 'Fitness and Wellness', description: 'Fitness Center', logo: 'Images/24hourfitness.png', website: 'https://www.24hourfitness.com' },
{ name: 'SoulCycle', category: 'Fitness and Wellness', description: 'Indoor Cycling Fitness', logo: 'Images/soulcyle.png', website: 'https://www.soul-cycle.com' },

// Toys and Games
{ name: 'LEGO', category: 'Toys and Games', description: 'Construction Toy Manufacturer', logo: 'Images/lego.png', website: 'https://www.lego.com' , famous: true},
{ name: 'Mattel', category: 'Toys and Games', description: 'Toy Manufacturer', logo: 'Images/mattel.png', website: 'https://www.mattel.com' },
{ name: 'Hasbro', category: 'Toys and Games', description: 'Toy and Game Company', logo: 'Images/hasbro.png', website: 'https://www.hasbro.com' },
{ name: 'Fisher-Price', category: 'Toys and Games', description: 'Toy Manufacturer for Infants and Toddlers', logo: 'Images/fisherprice.png', website: 'https://www.fisher-price.com' },
{ name: 'Nerf', category: 'Toys and Games', description: 'Foam Dart Blasters', logo: 'Images/nerf.png', website: 'https://www.nerf.com' },
{ name: 'Playmobil', category: 'Toys and Games', description: 'Toy Manufacturer', logo: 'Images/playmobil.png', website: 'https://www.playmobil.com' , famous: true}
];

// Get DOM elements
const brandGrid = document.getElementById('brandGrid');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const brandModal = document.getElementById('brandModal');
const modalDetails = document.getElementById('modalDetails');
const closeModal = document.querySelector('.close-modal');
const addBrandBtn = document.getElementById('addBrandBtn');
const addBrandModal = document.getElementById('addBrandModal');
const closeAddModal = document.querySelector('.close-add-modal');
const addBrandForm = document.getElementById('addBrandForm');
const brandCategorySelect = document.getElementById('brandCategory');

// Populate category filter dropdown
function populateCategoryFilter() {
// Clear existing options except the first one
categoryFilter.innerHTML = '<option value="">All Categories</option>';

const categories = [...new Set(brandsData.map(brand => brand.category))].sort();
categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
});
}

// Render brand grid
function renderBrandGrid(filteredBrands = brandsData) {
brandGrid.innerHTML = '';
filteredBrands.forEach(brand => {
    const brandCard = document.createElement('div');
    brandCard.classList.add('brand-card');
    
    const logoSrc = brand.logo || `https://via.placeholder.com/120?text=${brand.name.substring(0,2)}`;
    
    brandCard.innerHTML = `
        <img src="${logoSrc}" alt="${brand.name}" class="brand-logo">
        <h3>${brand.name}</h3>
        <p>${brand.category}</p>
    `;
    brandCard.addEventListener('click', () => showBrandDetails(brand));
    brandGrid.appendChild(brandCard);
});
}

// Show brand details in modal
function showBrandDetails(brand) {
const logoSrc = brand.logo || `https://via.placeholder.com/200?text=${brand.name.substring(0,2)}`;

modalDetails.innerHTML = `
    <img src="${logoSrc}" alt="${brand.name}">
    <h2>${brand.name}</h2>
    <p>${brand.description}</p>
    <p><strong>Category:</strong> ${brand.category}</p>
    <div class="modal-links">
        <a href="${brand.website}" target="_blank">Official Website</a>
        <a href="https://www.google.com/search?q=${encodeURIComponent(brand.name + ' social media')}" target="_blank">Social Media</a>
    </div>
`;
brandModal.style.display = 'flex';
}

// Filter brands function
function filterBrands() {
const searchTerm = searchInput.value.toLowerCase().trim();
const categoryTerm = categoryFilter.value;

// Define keywords for categories
const categoryKeywords = {
    'Automobiles': ['car', 'automobile', 'vehicle', 'motor'],
    'Processor': ['processor', 'graphics', 'cpu', 'gpu'],
    'EdTech Course': ['course', 'learning', 'education', 'certification'],
    'Banking': ['bank', 'finance', 'financial', 'loan', 'credit', 'debit'],
    'Services': ['service', 'consulting', 'it'],
    'Healthcare': ['health', 'medical', 'pharma', 'medicine'],
    'Construction': ['construction', 'infrastructure'],
    'Bike': ['bike', 'motorcycle','motor'],
    'Accommodation': ['stay', 'hotel', 'accommodation'],
    'Online Payment': ['payment', 'pay', 'transaction'],
    'Streaming': ['stream', 'video', 'entertainment', 'binge'],
    'Apparel': ['clothing', 'apparel', 'fashion', 'cloth'],
    'Toys and Games': ['toy', 'games', 'play', 'children'],
    'Food': ['food', 'meal', 'snack', 'cuisine'],
    'Coffee': ['coffee', 'brew', 'espresso', 'caffeine'],
    'Quick Commerce': ['delivery', 'grocery', 'instant', 'quick','food'],
    'Food Delivery': ['delivery', 'takeout', 'order', 'meal','food'],
    'Perfume': ['fragrance', 'scent', 'aroma', 'cologne'],
    'Digital Marketing': ['marketing', 'advertising', 'SEO', 'social media'],
    'Gaming': ['game', 'video game', 'console', 'play'],
    'Energy': ['energy', 'oil', 'gas', 'renewable'],
    'Beauty and Personal Care': ['beauty', 'cosmetics', 'skincare', 'personal care'],
    'Environmental Services': ['waste', 'recycling', 'environment', 'sustainability'],
    'Cryptocurrency': ['crypto', 'blockchain', 'bitcoin', 'ethereum'],
    'Laptop': ['laptop', 'notebook', 'computer', 'portable'],
    'Smartphone': ['smartphone', 'mobile', 'cell phone', 'device'],
    'Delivery': ['delivery','shipping', 'courier', 'logistics', 'transport']
};

let filteredBrands = brandsData;

// Check if the search term matches any category keywords
for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => searchTerm.includes(keyword))) {
        // If a keyword matches, filter brands by that category
        filteredBrands = brandsData.filter(brand => brand.category === category);
        break; // Exit the loop once a match is found
    }
}

// Filter brands function
function filterBrands() {
const searchTerm = searchInput.value.toLowerCase().trim();
const categoryTerm = categoryFilter.value;

// Filter brands based on search term and category
const filteredBrands = brandsData.filter(brand => {
    const matchesCategory = categoryTerm === '' || brand.category === categoryTerm;
    const matchesSearch = searchTerm === '' || 
        brand.name.toLowerCase().includes(searchTerm) || 
        brand.category.toLowerCase().includes(searchTerm) ||
        brand.description.toLowerCase().includes(searchTerm);
    
    return matchesCategory && matchesSearch;
});

renderBrandGrid(filteredBrands);

if (filteredBrands.length === 0) {
    brandGrid.innerHTML = '<p style="width: 100%; text-align: center; color: white;">No brands found matching your search.</p>';
}
}

// Event listeners for search and category filter
searchInput.addEventListener('input', filterBrands);
categoryFilter.addEventListener('change', () => {
searchInput.value = ''; 
filterBrands(); 
});

// Further filter by search term if no category match was found
if (filteredBrands.length === brandsData.length) {
    filteredBrands = brandsData.filter(brand => {
        const matchesCategory = categoryTerm === '' || brand.category === categoryTerm;
        const matchesSearch = searchTerm === '' || 
            brand.name.toLowerCase().includes(searchTerm) || 
            brand.category.toLowerCase().includes(searchTerm) ||
            brand.description.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });
}

renderBrandGrid(filteredBrands);

if (filteredBrands.length === 0) {
    brandGrid.innerHTML = '<p style="width: 100%; text-align: center; color: white;">No brands found matching your search.</p>';
}
}

// Open Add Brand modal
addBrandBtn.addEventListener('click', () => {
populateAddBrandCategories();
addBrandModal.style.display = 'flex';
});

// Close Add Brand modal
closeAddModal.addEventListener('click', () => {
addBrandModal.style.display = 'none';
});

// Close modal when clicking outside
brandModal.addEventListener('click', (event) => {
if (event.target === brandModal) {
    brandModal.style.display = 'none';
}
});

// Close add brand modal when clicking outside
addBrandModal.addEventListener('click', (event) => {
if (event.target === addBrandModal) {
    addBrandModal.style.display = 'none';
}
});

// Populate categories in the Add Brand form
function populateAddBrandCategories() {
// Clear existing options except the first one
brandCategorySelect.innerHTML = '<option value="">Select a category</option>';

// Get unique categories and sort them
const categories = [...new Set(brandsData.map(brand => brand.category))].sort();

// Add categories to dropdown
categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    brandCategorySelect.appendChild(option);
});

// Add option to create a new category
const newCategoryOption = document.createElement('option');
newCategoryOption.value = "new_category";
newCategoryOption.textContent = "-- Create New Category --";
brandCategorySelect.appendChild(newCategoryOption);
}

// Handle category selection for new category option
brandCategorySelect.addEventListener('change', function() {
if (this.value === 'new_category') {
    const newCategory = prompt('Enter new category name:');
    if (newCategory && newCategory.trim() !== '') {
        // Create and select the new option
        const newOption = document.createElement('option');
        newOption.value = newCategory.trim();
        newOption.textContent = newCategory.trim();
        
        // Insert before the "Create New Category" option
        brandCategorySelect.insertBefore(newOption, brandCategorySelect.lastChild);
        
        // Select the new option
        brandCategorySelect.value = newCategory.trim();
    } else {
        // If canceled or empty, reset to first option
        brandCategorySelect.selectedIndex = 0;
    }
}
});

// Handle form submission
addBrandForm.addEventListener('submit', (event) => {
event.preventDefault();

// Get form values
const name = document.getElementById('brandName').value.trim();
const category = document.getElementById('brandCategory').value;
const description = document.getElementById('brandDescription').value.trim();
const website = document.getElementById('brandWebsite').value.trim();
const logo = document.getElementById('brandLogo').value.trim() || null;
const famous = document.getElementById('brandFamous').checked;

// Validate inputs
if (name === '' || category === '' || description === '' || website === '') {
    alert('Please fill in all required fields.');
    return;
}

// Create new brand object
const newBrand = {
    name,
    category,
    description,
    website,
    logo,
    famous
};

// Add new brand to brandsData array
brandsData.push(newBrand);

// Reset form
addBrandForm.reset();

// Close modal
addBrandModal.style.display = 'none';

// Update the category filter with the new category if it's new
let categoryExists = false;
for (let i = 0; i < categoryFilter.options.length; i++) {
    if (categoryFilter.options[i].value === category) {
        categoryExists = true;
        break;
    }
}

if (!categoryExists) {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
}

// Show the newly added brand
searchInput.value = name;
filterBrands();

// Show success message with animation
const successMessage = document.createElement('div');
successMessage.textContent = `Brand "${name}" has been added successfully!`;
successMessage.style.position = 'fixed';
successMessage.style.top = '20px';
successMessage.style.left = '50%';
successMessage.style.transform = 'translateX(-50%)';
successMessage.style.background = 'linear-gradient(to right, #1a2980, #26d0ce)';
successMessage.style.color = 'white';
successMessage.style.padding = '15px 20px';
successMessage.style.borderRadius = '5px';
successMessage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
successMessage.style.zIndex = '1001';
successMessage.style.opacity = '0';
successMessage.style.transition = 'opacity 0.5s ease';

document.body.appendChild(successMessage);

// Show message with fade-in
setTimeout(() => {
    successMessage.style.opacity = '1';
}, 10);

// Remove message after 3 seconds with fade-out
setTimeout(() => {
    successMessage.style.opacity = '0';
    setTimeout(() => {
        document.body.removeChild(successMessage);
    }, 500);
}, 3000);
});

// Close modal button event
closeModal.addEventListener('click', () => {
brandModal.style.display = 'none';
});

// Initialize page with famous brands
function initializePage() {
const famousBrands = brandsData.filter(brand => brand.famous);
populateCategoryFilter();
renderBrandGrid(famousBrands);
}

// Event listeners for search and category filter
searchInput.addEventListener('input', filterBrands);
categoryFilter.addEventListener('change', () => {
searchInput.value = ''; 
filterBrands(); 
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
initializePage();
});
