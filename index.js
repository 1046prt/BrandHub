        const brandsData = [
            // Processor
            {name: 'NVIDIA', category: 'Processor', description: 'Graphics Processing Technology', logo: 'https://via.placeholder.com/150?text=NVIDIA', website: 'https://www.nvidia.com', famous: true},
            {name: 'AMD', category: 'Processor', description: 'Advanced Micro Devices', logo: 'https://via.placeholder.com/150?text=AMD', website: 'https://www.amd.com', famous: true},
            {name: 'Intel', category: 'Processor', description: 'Semiconductor Manufacturer', logo: 'https://via.placeholder.com/150?text=Intel', website: 'https://www.intel.com', famous: true},
            {name: 'Qualcomm', category: 'Processor', description: 'Wireless Technology & Semiconductors', logo: 'https://via.placeholder.com/150?text=Qualcomm', website: 'https://www.qualcomm.com'},
            {name: 'Mediatek', category: 'Processor', description: 'Semiconductor Company', logo: 'https://via.placeholder.com/150?text=Mediatek', website: 'https://www.mediatek.com'},

            // EdTech Course
            {name: 'Udemy', category: 'EdTech Course', description: 'Online Learning Platform', logo: 'https://via.placeholder.com/150?text=Udemy', website: 'https://www.udemy.com', famous: true},
            {name: 'Great Learning', category: 'EdTech Course', description: 'Professional Learning Platform', logo: 'https://via.placeholder.com/150?text=Great+Learning', website: 'https://www.greatlearning.in'},
            {name: 'EC Council', category: 'EdTech Course', description: 'Cybersecurity Training', logo: 'https://via.placeholder.com/150?text=EC+Council', website: 'https://www.eccouncil.org'},
            {name: 'edX', category: 'EdTech Course', description: 'Online Course Platform', logo: 'https://via.placeholder.com/150?text=edX', website: 'https://www.edx.org'},
            {name: 'LinkedIn Learning', category: 'EdTech Course', description: 'Professional Skills Training', logo: 'https://via.placeholder.com/150?text=LinkedIn+Learning', website: 'https://www.linkedin.com/learning', famous: true},

            // Banking
            {name: 'World Bank', category: 'Banking', description: 'International Financial Institution', logo: 'https://via.placeholder.com/150?text=World+Bank', website: 'https://www.worldbank.org'},
            {name: 'Swiss Bank', category: 'Banking', description: 'Swiss Banking Services', logo: 'https://via.placeholder.com/150?text=Swiss+Bank', website: 'https://www.swissbanking.org'},
            {name: 'Bank of Europe', category: 'Banking', description: 'European Banking', logo: 'https://via.placeholder.com/150?text=Bank+of+Europe', website: 'https://www.ecb.europa.eu'},
            {name: 'JPMorgan Chase', category: 'Banking', description: 'Financial Services', logo: 'https://via.placeholder.com/150?text=JPMorgan+Chase', website: 'https://www.chase.com', famous: true},
            {name: 'Bank of America', category: 'Banking', description: 'Banking and Financial Services', logo: 'https://via.placeholder.com/150?text=Bank+of+America', website: 'https://www.bankofamerica.com', famous: true},
            {name: 'Citigroup', category: 'Banking', description: 'Global Financial Services', logo: 'https://via.placeholder.com/150?text=Citigroup', website: 'https://www.citigroup.com'},
            {name: 'Wells Fargo', category: 'Banking', description: 'Banking and Financial Services', logo: 'https://via.placeholder.com/150?text=Wells+Fargo', website: 'https://www.wellsfargo.com'},
            {name: 'HSBC', category: 'Banking', description: 'International Banking', logo: 'https://via.placeholder.com/150?text=HSBC', website: 'https://www.hsbc.com'},

            // Services
            {name: 'Tata Consultancy Services', category: 'Services', description: 'IT Services and Consulting', logo: 'https://via.placeholder.com/150?text=TCS', website: 'https://www.tcs.com', famous: true},
            {name: 'Wipro', category: 'Services', description: 'IT Services and Consulting', logo: 'https://via.placeholder.com/150?text=Wipro', website: 'https://www.wipro.com'},
            {name: 'Infosys', category: 'Services', description: 'IT Consulting and Services', logo: 'https://via.placeholder.com/150?text=Infosys', website: 'https://www.infosys.com'},
            {name: 'IBM', category: 'Services', description: 'Technology and Consulting', logo: 'https://via.placeholder.com/150?text=IBM', website: 'https://www.ibm.com', famous: true},
            {name: 'Tech Mahindra', category: 'Services', description: 'IT Services and Consulting', logo: 'https://via.placeholder.com/150?text=Tech+Mahindra', website: 'https://www.techmahindra.com'},
            {name: 'Capgemini', category: 'Services', description: 'Consulting and Technology Services', logo: 'https://via.placeholder.com/150?text=Capgemini', website: 'https://www.capgemini.com'},

            // Healthcare
            {name: 'UnitedHealth Group', category: 'Healthcare', description: 'Healthcare Services', logo: 'https://via.placeholder.com/150?text=UnitedHealth+Group', website: 'https://www.unitedhealthgroup.com'},
            {name: 'CVS Health', category: 'Healthcare', description: 'Healthcare and Pharmacy', logo: 'https://via.placeholder.com/150?text=CVS+Health', website: 'https://www.cvshealth.com', famous: true},
            {name: 'Mankind Pharma', category: 'Healthcare', description: 'Pharmaceutical Company', logo: 'https://via.placeholder.com/150?text=Mankind+Pharma', website: 'https://www.mankindpharma.com'},
            {name: 'Sun Pharmaceutical', category: 'Healthcare', description: 'Pharmaceutical Manufacturing', logo: 'https://via.placeholder.com/150?text=Sun+Pharma', website: 'https://www.sunpharma.com'},
            {name: 'Abbott', category: 'Healthcare', description: 'Medical Devices and Healthcare', logo: 'https://via.placeholder.com/150?text=Abbott', website: 'https://www.abbott.com'},
            {name: 'Cipla', category: 'Healthcare', description: 'Pharmaceutical Company', logo: 'https://via.placeholder.com/150?text=Cipla', website: 'https://www.cipla.com'},

            // Automobiles
            {name: 'Jaguar', category: 'Automobiles', description: 'Luxury Car Manufacturer', logo: 'https://via.placeholder.com/150?text=Jaguar', website: 'https://www.jaguar.in'},
            {name: 'Alfa Romeo', category: 'Automobiles', description: 'Italian Automobile Manufacturer', logo: 'https://via.placeholder.com/150?text=Alfa+Romeo', website: 'https://www.alfaromeo.com'},
            {name: 'Porsche', category: 'Automobiles', description: 'Sports Car Manufacturer', logo: 'https://via.placeholder.com/150?text=Porsche', website: 'https://www.porsche.com'},
            {name: 'AMG', category: 'Automobiles', description: 'High-Performance Automotive Division', logo: 'https://via.placeholder.com/150?text=AMG', website: 'https://www.mercedes-amg.com'},
            {name: 'Dodge', category: 'Automobiles', description: 'American Automobile Manufacturer', logo: 'https://via.placeholder.com/150?text=Dodge', website: 'https://www.dodge.com'},
            {name: 'Mercedes', category: 'Automobiles', description: 'Luxury Automobile Manufacturer', logo: 'https://via.placeholder.com/150?text=Mercedes', website: 'https://www.mercedes-benz.com', famous: true},
            {name: 'Maserati', category: 'Automobiles', description: 'Luxury Sports Car Manufacturer', logo: 'https://via.placeholder.com/150?text=Maserati', website: 'https://www.maserati.com'},
            {name: 'Cadillac', category: 'Automobiles', description: 'Luxury Vehicle Division', logo: 'https://via.placeholder.com/150?text=Cadillac', website: 'https://www.cadillac.com'},
            {name: 'Chevrolet', category: 'Automobiles', description: 'American Automobile Division', logo: 'https://via.placeholder.com/150?text=Chevrolet', website: 'https://www.chevrolet.com'},
            {name: 'Tesla', category: 'Automobiles', description: 'Electric Vehicle Manufacturer', logo: 'https://via.placeholder.com/150?text=Tesla', website: 'https://www.tesla.com', famous: true},

            // Construction
            {name: 'L&T (Larsen & Toubro)', category: 'Construction', description: 'Engineering and Construction Company', logo: 'https://via.placeholder.com/150?text=L%26T', website: 'https://www.larsentoubro.com'},
            {name: 'Adani', category: 'Construction', description: 'Infrastructure and Construction', logo: 'https://via.placeholder.com/150?text=Adani', website: 'https://www.adani.com'},
            {name: 'Aditya Birla', category: 'Construction', description: 'Multinational Conglomerate', logo: 'https://via.placeholder.com/150?text=Aditya+Birla', website: 'https://www.adityabirla.com'},
            {name: 'JSW Infrastructure', category: 'Construction', description: 'Infrastructure Development', logo: 'https://via.placeholder.com/150?text=JSW+Infrastructure', website: 'https://www.jswinfra.com'},
            {name: 'Tata Projects', category: 'Construction', description: 'Infrastructure and Construction', logo: 'https://via.placeholder.com/150?text=Tata+Projects', website: 'https://www.tataprojects.com'},
            {name: 'Jindal Steel & Power', category: 'Construction', description: 'Steel and Power Infrastructure', logo: 'https://via.placeholder.com/150?text=Jindal+Steel', website: 'https://www.jindalsteelpower.com'},

            // Bike
            {name: 'BMW', category: 'Bike', description: 'Motorcycle and Automobile Manufacturer', logo: 'https://via.placeholder.com/150?text=BMW', website: 'https://www.bmw-motorrad.in/en/models/modeloverview.html'},
            {name: 'Harley-Davidson', category: 'Bike', description: 'American Motorcycle Manufacturer', logo: 'https://via.placeholder.com/150?text=Harley-Davidson', website: 'https://www.harley-davidson.com'},
            {name: 'Jawa', category: 'Bike', description: 'Motorcycle Manufacturer', logo: 'https://via.placeholder.com/150?text=Jawa', website: 'https://www.jawamotorcycles.com'},
            {name: 'Indian Motorcycle', category: 'Bike', description: 'American Motorcycle Manufacturer', logo: 'https://via.placeholder.com/150?text=Indian+Motorcycle', website: 'https://www.indianmotorcycle.com'},
            {name: 'Royal Enfield', category: 'Bike', description: 'Motorcycle Manufacturer', logo: 'https://via.placeholder.com/150?text=Royal+Enfield', website: 'https://www.royalenfield.com'},
            {name: 'Yamaha', category: 'Bike', description: 'Motorcycle and Vehicle Manufacturer', logo: 'https://via.placeholder.com/150?text=Yamaha', website: 'https://www.yamaha.com'},
            {name: 'Ola', category: 'Bike', description: 'Electric Mobility Company', logo: 'https://via.placeholder.com/150?text=Ola', website: 'https://www.ola.com'},

            // Accommodation
            {name: 'Brevistay', category: 'Accommodation', description: 'Short-term Accommodation Platform', logo: 'https://via.placeholder.com/150?text=Brevistay', website: 'https://www.brevistay.com'},
            {name: 'OYO', category: 'Accommodation', description: 'Hospitality Platform', logo: 'https://via.placeholder.com/150?text=OYO', website: 'https://www.oyorooms.com'},
            {name: 'MakeMyTrip', category: 'Accommodation', description: 'Online Travel Platform', logo: 'https://via.placeholder.com/150?text=MakeMyTrip', website: 'https://www.makemytrip.com'},
            {name: 'Goibibo', category: 'Accommodation', description: 'Online Travel Booking', logo: 'https://via.placeholder.com/150?text=Goibibo', website: 'https://www.goibibo.com'},
            {name: 'Agoda', category: 'Accommodation', description: 'Travel Accommodation Platform', logo: 'https://via.placeholder.com/150?text=Agoda', website: 'https://www.agoda.com'},
            {name: 'Airbnb', category: 'Accommodation', description: 'Lodging Marketplace', logo: 'https://via.placeholder.com/150?text=Airbnb', website: 'https://www.airbnb.com'},
            {name: 'Booking.com', category: 'Accommodation', description: 'Online Travel Booking', logo: 'https://via.placeholder.com/150?text=Booking.com', website: 'https://www.booking.com'},
            {name: 'Cleartrip', category: 'Accommodation', description: 'Travel Booking Platform', logo: 'https://via.placeholder.com/150?text=Cleartrip', website: 'https://www.cleartrip.com'},

            // Online Payment
            {name: 'PhonePe', category: 'Online Payment', description: 'Digital Payment Platform', logo: 'https://via.placeholder.com/150?text=PhonePe', website: 'https://www.phonepe.com'},
            {name: 'GP (Google Pay)', category: 'Online Payment', description: 'Digital Payment Service', logo: 'https://via.placeholder.com/150?text=Google+Pay', website: 'https://pay.google.com'},
            {name: 'Paytm', category: 'Online Payment', description: 'Mobile Payment and Financial Services', logo: 'https://via.placeholder.com/150?text=Paytm', website: 'https://www.paytm.com'},
            {name: 'AmPay', category: 'Online Payment', description: 'Payment Services', logo: 'https://via.placeholder.com/150?text=AmPay', website: 'https://www.ampayus.com/'},
            {name: 'Cred', category: 'Online Payment', description: 'Credit Card Payment Platform', logo: 'https://via.placeholder.com/150?text=Cred', website: 'https://www.cred.club'},
            {name: 'FamPay', category: 'Online Payment', description: 'Digital Payment for Young Users', logo: 'https://via.placeholder.com/150?text=FamPay', website: 'https://www.fampay.in'},
            {name: 'BHIM (Bharat Interface for Money)', category: 'Online Payment', description: 'Digital Payment Platform', logo: 'https://via.placeholder.com/150?text=BHIM', website: 'https://www.bhimupi.org.in'},

            // Streaming
            {name: 'Netflix', category: 'Streaming', description: 'Online Streaming Platform', logo: 'https://via.placeholder.com/150?text=Netflix', website: 'https://www.netflix.com'},
            {name: 'Prime Video', category: 'Streaming', description: 'Amazon Prime Video Streaming', logo: 'https://via.placeholder.com/150?text=Prime+Video', website: 'https://www.primevideo.com'},
            {name: 'JioTV', category: 'Streaming', description: 'Jio Streaming Platform', logo: 'https://via.placeholder.com/150?text=JioTV', website: 'https://www.jio.com/tv'},
            {name: 'Jio Cinema', category: 'Streaming', description: 'Jio Digital Video Platform', logo: 'https://via.placeholder.com/150?text=Jio+Cinema', website: 'https://www.jiocinema.com'},
            {name: 'Zee5', category: 'Streaming', description: 'Digital Video Platform', logo: 'https://via.placeholder.com/150?text=Zee5', website: 'https://www.zee5.com'},
            {name: 'Disney+ Hotstar', category: 'Streaming', description: 'Streaming Entertainment Platform', logo: 'https://via.placeholder.com/150?text=Disney+Hotstar', website: 'https://www.hotstar.com'},
            {name: 'Sony LIV', category: 'Streaming', description: 'Digital Media Platform', logo: 'https://via.placeholder.com/150?text=Sony+LIV', website: 'https://www.sonyliv.com'},

            // Apparel
            {name: 'Allen Solly', category: 'Apparel', description: 'Clothing Brand', logo: 'https://via.placeholder.com/150?text=Allen+Solly', website: 'https://www.allensolly.com'},
            {name: 'LV (Louis Vuitton)', category: 'Apparel', description: 'Luxury Fashion House', logo: 'https://via.placeholder.com/150?text=LV', website: 'https://in.louisvuitton.com/eng-in/homepage'},
            {name: 'Levi\'s', category: 'Apparel', description: 'Denim and Casual Wear', logo: 'https://via.placeholder.com/150?text=Levi%27s', website: 'https://levi.in/'},
            {name: 'Adidas', category: 'Apparel', description: 'Sports Apparel and Footwear', logo: 'https://via.placeholder.com/150?text=Adidas', website: 'https://www.adidas.co.in/'},
            {name: 'Arrow', category: 'Apparel', description: 'Clothing and Fashion', logo: 'https://via.placeholder.com/150?text=Arrow', website: 'https://arrow1851.com/'},
            {name: 'Calvin Klein', category: 'Apparel', description: 'Fashion and Lifestyle Brand', logo: 'https://via.placeholder.com/150?text=Calvin+Klein', website: 'https://www.calvinklein.com'},
            {name: 'Columbia', category: 'Apparel', description: 'Outdoor Apparel and Sportswear', logo: 'https://via.placeholder.com/150?text=Columbia', website: 'https://www.columbia.com'},
            {name: 'Jack & Jones', category: 'Apparel', description: 'Fashion Clothing Brand', logo: 'https://via.placeholder.com/150?text=Jack+%26+Jones', website: 'https://www.jackjones.com'},
            {name: 'Louis Philippe', category: 'Apparel', description: 'Men\'s Fashion Brand', logo: 'https://via.placeholder.com/150?text=Louis+Philippe', website: 'https://www.louisphilippe.com'},
            {name: 'Puma', category: 'Apparel', description: 'Sports and Lifestyle Brand', logo: 'https://via.placeholder.com/150?text=Puma', website: 'https://www.puma.com'}
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