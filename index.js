const brandsData = [
            // Processor
            {name: 'NVIDIA', category: 'Processor', description: 'Graphics Processing Technology', logo: 'Images/nv.png', website: 'https://www.nvidia.com', famous: true},
            {name: 'AMD', category: 'Processor', description: 'Advanced Micro Devices', logo: 'Images/amd.png', website: 'https://www.amd.com', famous: true},
            {name: 'Intel', category: 'Processor', description: 'Semiconductor Manufacturer', logo: 'Images/intel.png', website: 'https://www.intel.com', famous: true},
            {name: 'Qualcomm', category: 'Processor', description: 'Wireless Technology & Semiconductors', logo: 'Images/qualcomm.png', website: 'https://www.qualcomm.com'},
            {name: 'Mediatek', category: 'Processor', description: 'Semiconductor Company', logo: 'Images/media.jpg', website: 'https://www.mediatek.com'},

            // EdTech Course
            {name: 'Udemy', category: 'EdTech Course', description: 'Online Learning Platform', logo: 'Images/DEMY.jpg', website: 'https://www.udemy.com', famous: true},
            {name: 'Great Learning', category: 'EdTech Course', description: 'Professional Learning Platform', logo: 'Images/gl.png', website: 'https://www.greatlearning.in'},
            {name: 'EC Council', category: 'EdTech Course', description: 'Cybersecurity Training', logo: 'Images/eccouncil.png', website: 'https://www.eccouncil.org'},
            {name: 'edX', category: 'EdTech Course', description: 'Online Course Platform', logo: 'Images/edx.png', website: 'https://www.edx.org'},
            {name: 'LinkedIn Learning', category: 'EdTech Course', description: 'Professional Skills Training', logo: 'Images/linkd.jpg', website: 'https://www.linkedin.com/learning', famous: true},

            // Banking
            {name: 'World Bank', category: 'Banking', description: 'International Financial Institution', logo: 'Images/worldbank.png', website: 'https://www.worldbank.org'},
            {name: 'Swiss Bank', category: 'Banking', description: 'Swiss Banking Services', logo: 'Images/swiss bank.png', website: 'https://www.swissbanking.org'},
            {name: 'Bank of Europe', category: 'Banking', description: 'European Banking', logo: 'Images/eu.png', website: 'https://www.ecb.europa.eu'},
            {name: 'JPMorgan Chase', category: 'Banking', description: 'Financial Services', logo: 'Images/jpm.png', website: 'https://www.chase.com', famous: true},
            {name: 'Bank of America', category: 'Banking', description: 'Banking and Financial Services', logo: 'Images/bankofamerica.png', website: 'https://www.bankofamerica.com', famous: true},
            {name: 'Citigroup', category: 'Banking', description: 'Global Financial Services', logo: 'Images/citigroup.png', website: 'https://www.citigroup.com'},
            {name: 'Wells Fargo', category: 'Banking', description: 'Banking and Financial Services', logo: 'Images/wellfargo.png', website: 'https://www.wellsfargo.com'},
            {name: 'HSBC', category: 'Banking', description: 'International Banking', logo: 'Images/hsbc.png', website: 'https://www.hsbc.com'},

            // Services
            {name: 'Tata Consultancy Services', category: 'Services', description: 'IT Services and Consulting', logo: 'Images/tcs.jpg', website: 'https://www.tcs.com', famous: true},
            {name: 'Wipro', category: 'Services', description: 'IT Services and Consulting', logo: 'Images/wipro.png', website: 'https://www.wipro.com'},
            {name: 'Infosys', category: 'Services', description: 'IT Consulting and Services', logo: 'Images/infosys.png', website: 'https://www.infosys.com'},
            {name: 'IBM', category: 'Services', description: 'Technology and Consulting', logo: 'Images/ibm.png', website: 'https://www.ibm.com', famous: true},
            {name: 'Tech Mahindra', category: 'Services', description: 'IT Services and Consulting', logo: 'Images/techmah.png', website: 'https://www.techmahindra.com'},
            {name: 'Capgemini', category: 'Services', description: 'Consulting and Technology Services', logo: 'Images/capegemini.png', website: 'https://www.capgemini.com'},

            // Healthcare
            {name: 'UnitedHealth Group', category: 'Healthcare', description: 'Healthcare Services', logo: 'Images/health.png', website: 'https://www.unitedhealthgroup.com'},
            {name: 'CVS Health', category: 'Healthcare', description: 'Healthcare and Pharmacy', logo: 'Images/cvs.png', website: 'https://www.cvshealth.com', famous: true},
            {name: 'Mankind Pharma', category: 'Healthcare', description: 'Pharmaceutical Company', logo: 'Images/mankind.png', website: 'https://www.mankindpharma.com'},
            {name: 'Sun Pharmaceutical', category: 'Healthcare', description: 'Pharmaceutical Manufacturing', logo: 'Images/sunp.png', website: 'https://www.sunpharma.com'},
            {name: 'Abbott', category: 'Healthcare', description: 'Medical Devices and Healthcare', logo: 'Images/abbott.png', website: 'https://www.abbott.com'},
            {name: 'Cipla', category: 'Healthcare', description: 'Pharmaceutical Company', logo: 'Images/cipla.png', website: 'https://www.cipla.com'},

            // Automobiles
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

            // Construction
            {name: 'L&T (Larsen & Toubro)', category: 'Construction', description: 'Engineering and Construction Company', logo: 'Images/lt.png', website: 'https://www.larsentoubro.com'},
            {name: 'Adani', category: 'Construction', description: 'Infrastructure and Construction', logo: 'Images/adani.png', website: 'https://www.adani.com'},
            {name: 'Aditya Birla', category: 'Construction', description: 'Multinational Conglomerate', logo: 'Images/aditya.png', website: 'https://www.adityabirla.com'},
            {name: 'JSW Infrastructure', category: 'Construction', description: 'Infrastructure Development', logo: 'Images/jsw.png', website: 'https://www.jswinfra.com'},
            {name: 'Tata Projects', category: 'Construction', description: 'Infrastructure and Construction', logo: 'Images/tata.png', website: 'https://www.tataprojects.com'},
            {name: 'Jindal Steel & Power', category: 'Construction', description: 'Steel and Power Infrastructure', logo: 'Images/jindal.png', website: 'https://www.jindalsteelpower.com'},

            // Bike
            {name: 'BMW', category: 'Bike', description: 'Motorcycle and Automobile Manufacturer', logo: 'Images/bmw.jpg', website: 'https://www.bmw-motorrad.in/en/models/modeloverview.html'},
            {name: 'Harley-Davidson', category: 'Bike', description: 'American Motorcycle Manufacturer', logo: 'Images/harley.png', website: 'https://www.harley-davidson.com'},
            {name: 'Jawa', category: 'Bike', description: 'Motorcycle Manufacturer', logo: 'Images/jawa.png', website: 'https://www.jawamotorcycles.com'},
            {name: 'Indian Motorcycle', category: 'Bike', description: 'American Motorcycle Manufacturer', logo: 'Images/indian.png', website: 'https://www.indianmotorcycle.com'},
            {name: 'Royal Enfield', category: 'Bike', description: 'Motorcycle Manufacturer', logo: 'Images/re.png', website: 'https://www.royalenfield.com'},
            {name: 'Yamaha', category: 'Bike', description: 'Motorcycle and Vehicle Manufacturer', logo: 'Images/yamaha.png', website: 'https://www.yamaha.com'},
            {name: 'Ola', category: 'Bike', description: 'Electric Mobility Company', logo: 'Images/ola.png', website: 'https://www.ola.com'},

            // Accommodation
            {name: 'Brevistay', category: 'Accommodation', description: 'Short-term Accommodation Platform', logo: 'Images/bervi.png', website: 'https://www.brevistay.com'},
            {name: 'OYO', category: 'Accommodation', description: 'Hospitality Platform', logo: 'Images/oyo.png', website: 'https://www.oyorooms.com'},
            {name: 'MakeMyTrip', category: 'Accommodation', description: 'Online Travel Platform', logo: 'Images/makemy.png', website: 'https://www.makemytrip.com'},
            {name: 'Goibibo', category: 'Accommodation', description: 'Online Travel Booking', logo: 'Images/goibibo.png', website: 'https://www.goibibo.com'},
            {name: 'Agoda', category: 'Accommodation', description: 'Travel Accommodation Platform', logo: 'Images/agoda.png', website: 'https://www.agoda.com'},
            {name: 'Airbnb', category: 'Accommodation', description: 'Lodging Marketplace', logo: 'Images/airbnb.png', website: 'https://www.airbnb.com'},
            {name: 'Booking.com', category: 'Accommodation', description: 'Online Travel Booking', logo: 'Images/booking.png', website: 'https://www.booking.com'},
            {name: 'Cleartrip', category: 'Accommodation', description: 'Travel Booking Platform', logo: 'Images/clearmytrip.png', website: 'https://www.cleartrip.com'},

            // Online Payment
            {name: 'PhonePe', category: 'Online Payment', description: 'Digital Payment Platform', logo: 'Images/pp.jpg', website: 'https://www.phonepe.com'},
            {name: 'Google Pay', category: 'Online Payment', description: 'Digital Payment Service', logo: 'Images/gp.jpg', website: 'https://pay.google.com'},
            {name: 'Paytm', category: 'Online Payment', description: 'Mobile Payment and Financial Services', logo: 'Images/paytm.png', website: 'https://www.paytm.com'},
            {name: 'AmPay', category: 'Online Payment', description: 'Payment Services', logo: 'Images/ampay.png', website: 'https://www.ampayus.com/'},
            {name: 'Cred', category: 'Online Payment', description: 'Credit Card Payment Platform', logo: 'Images/cred.jpg', website: 'https://www.cred.club'},
            {name: 'FamPay', category: 'Online Payment', description: 'Digital Payment for Young Users', logo: 'Images/fampay.jpg', website: 'https://www.fampay.in'},
            {name: 'BHIM', category: 'Online Payment', description: 'Digital Payment Platform', logo: 'Images/bhim.png', website: 'https://www.bhimupi.org.in'},

            // Streaming
            {name: 'Netflix', category: 'Streaming', description: 'Online Streaming Platform', logo: 'Images/netflix.png', website: 'https://www.netflix.com'},
            {name: 'Prime Video', category: 'Streaming', description: 'Amazon Prime Video Streaming', logo: 'Images/prime.jpg', website: 'https://www.primevideo.com'},
            {name: 'Jio Cinema', category: 'Streaming', description: 'Jio Digital Video Platform', logo: 'Images/jio.png', website: 'https://www.jiocinema.com'},
            {name: 'Zee5', category: 'Streaming', description: 'Digital Video Platform', logo: 'Images/zee5.png', website: 'https://www.zee5.com'},
            {name: 'JioHotstar', category: 'Streaming', description: 'Streaming Entertainment Platform', logo: 'Images/jiohot.jpg', website: 'https://www.hotstar.com'},
            {name: 'Sony LIV', category: 'Streaming', description: 'Digital Media Platform', logo: 'Images/sony.jpg', website: 'https://www.sonyliv.com'},

            // Apparel
            {name: 'Allen Solly', category: 'Apparel', description: 'Clothing Brand', logo: 'Images/allensol.jpg', website: 'https://www.allensolly.com'},
            {name: 'LV (Louis Vuitton)', category: 'Apparel', description: 'Luxury Fashion House', logo: 'Images/lv.jpg', website: 'https://in.louisvuitton.com/eng-in/homepage'},
            {name: 'Levi\'s', category: 'Apparel', description: 'Denim and Casual Wear', logo: 'Images/levi.png', website: 'https://levi.in/'},
            {name: 'Adidas', category: 'Apparel', description: 'Sports Apparel and Footwear', logo: 'Images/adidas.png', website: 'https://www.adidas.co.in/'},
            {name: 'Arrow', category: 'Apparel', description: 'Clothing and Fashion', logo: 'Images/arrow.jpg', website: 'https://arrow1851.com/'},
            {name: 'Calvin Klein', category: 'Apparel', description: 'Fashion and Lifestyle Brand', logo: 'Images/cel.png', website: 'https://www.calvinklein.com'},
            {name: 'Columbia', category: 'Apparel', description: 'Outdoor Apparel and Sportswear', logo: 'Images/columbia.jpg', website: 'https://www.columbia.com'},
            {name: 'Jack & Jones', category: 'Apparel', description: 'Fashion Clothing Brand', logo: 'Images/jj.png', website: 'https://www.jackjones.com'},
            {name: 'Louis Philippe', category: 'Apparel', description: 'Men\'s Fashion Brand', logo: 'Images/lp.png', website: 'https://www.louisphilippe.com'},
            {name: 'Puma', category: 'Apparel', description: 'Sports and Lifestyle Brand', logo: 'Images/puma.png', website: 'https://www.puma.com'}
        ];

        // Functions from the original script (exactly the same)
        const brandGrid = document.getElementById('brandGrid');
        const categoryFilter = document.getElementById('categoryFilter');
        const searchInput = document.getElementById('searchInput');
        const brandModal = document.getElementById('brandModal');
        const modalDetails = document.getElementById('modalDetails');
        const closeModal = document.querySelector('.close-modal');

        function populateCategoryFilter() {
            const categories = [...new Set(brandsData.map(brand => brand.category))];
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });
        }

        function renderBrandGrid(filteredBrands = brandsData) {
            brandGrid.innerHTML = '';
            filteredBrands.forEach(brand => {
                const brandCard = document.createElement('div');
                brandCard.classList.add('brand-card');
                
                const logoSrc = brand.logo || `https://via.placeholder.com/100?text=${brand.name.substring(0,2)}`;
                
                brandCard.innerHTML = `
                    <img src="${logoSrc}" alt="${brand.name}" class="brand-logo">
                    <h3>${brand.name}</h3>
                    <p>${brand.category}</p>
                `;
                brandCard.addEventListener('click', () => showBrandDetails(brand));
                brandGrid.appendChild(brandCard);
            });
        }

        function showBrandDetails(brand) {
            const logoSrc = brand.logo || `https://via.placeholder.com/150?text=${brand.name.substring(0,2)}`;
            
            modalDetails.innerHTML = `
                <img src="${logoSrc}" alt="${brand.name}" style="max-height: 150px; margin-bottom: 15px; border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
                <h2>${brand.name}</h2>
                <p>${brand.description}</p>
                <p><strong>Category:</strong> ${brand.category}</p>
                <a href="${brand.website}" target="_blank">Visit Website</a>
            `;
            brandModal.style.display = 'flex';
        }

        brandModal.addEventListener('click', (event) => {
            if (event.target === brandModal) {
                brandModal.style.display = 'none';
            }
        });

        function filterBrands() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const categoryTerm = categoryFilter.value;

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
                brandGrid.innerHTML = '<p style="width: 100%; text-align: center;">No brands found matching your search.</p>';
            }
        }

        closeModal.addEventListener('click', () => {
            brandModal.style.display = 'none';
        });

        function initializePage() {
            const famousBrands = brandsData.filter(brand => brand.famous);
            populateCategoryFilter();
            renderBrandGrid(famousBrands);
        }

        searchInput.addEventListener('input', filterBrands);
        categoryFilter.addEventListener('change', filterBrands);

        initializePage();
