// main.js - Quản lý hiển thị sản phẩm XE HƠI
console.log('main.js đang chạy...');

// Danh sách xe SEDAN (15 xe)
const sedan1 = [
    {
        id: "sedan1",
        tendv: "Toyota Vios",
        anh: "./ảnh/seban/seban1.png",
        tt1: "Xăng 1.5L, 4 xi-lanh, Dual VVT-i, 107 mã lực.",
        gia: "450000000",
        category: "Sedan",
        size: "Sedan cỡ B",
        serves: "5 người",
        type: "sedan",
        tags: ["Toyota", "Vios", "tiết kiệm nhiên liệu"]
    },
    {
        id: "sedan2",
        tendv: "Honda City",
        anh: "./ảnh/seban/seban2.png",
        tt1: "1.5L i-VTEC, 119 mã lực, hộp số CVT.",
        gia: "560000000",
        category: "Sedan",
        size: "Sedan cỡ B",
        serves: "5 người",
        type: "sedan",
        tags: ["Honda", "City", "thiết kế thể thao"]
    },
    {
        id: "sedan3",
        tendv: "Hyundai Accent",
        anh: "./ảnh/seban/seban3.png",
        tt1: "1.4L MPi, 100 mã lực, hộp số tự động 6 cấp.",
        gia: "430000000",
        category: "Sedan",
        size: "Sedan cỡ B",
        serves: "5 người",
        type: "sedan",
        tags: ["Hyundai", "Accent", "giá rẻ"]
    },
    {
        id: "sedan4",
        tendv: "Mazda3 Sedan",
        anh: "./ảnh/seban/seban4.png",
        tt1: "2.0L SkyActiv-G, 162 mã lực, hộp số 6 cấp.",
        gia: "780000000",
        category: "Sedan",
        size: "Sedan cỡ C",
        serves: "5 người",
        type: "sedan",
        tags: ["Mazda", "Mazda3", "thiết kế thể thao"]
    },
    {
        id: "sedan5",
        tendv: "Kia Soluto",
        anh: "./ảnh/seban/seban5.png",
        tt1: "1.4L, 95 mã lực, hộp số tự động 4 cấp.",
        gia: "400000000",
        category: "Sedan",
        size: "Sedan cỡ B",
        serves: "5 người",
        type: "sedan",
        tags: ["Kia", "Soluto", "giá rẻ"]
    },
    {
        id: "sedan6",
        tendv: "Mitsubishi Attrage",
        anh: "./ảnh/seban/seban6.png",
        tt1: "1.2L 3 xi-lanh, 78 mã lực, CVT.",
        gia: "380000000",
        category: "Sedan",
        size: "Sedan cỡ B",
        serves: "5 người",
        type: "sedan",
        tags: ["Mitsubishi", "Attrage", "tiết kiệm"]
    },
    {
        id: "sedan7",
        tendv: "Toyota Corolla Altis",
        anh: "./ảnh/seban/seban7.png",
        tt1: "1.8L, 140 mã lực, CVT.",
        gia: "720000000",
        category: "Sedan",
        size: "Sedan cỡ C",
        serves: "5 người",
        type: "sedan",
        tags: ["Toyota", "Corolla", "bền bỉ"]
    },
    {
        id: "sedan8",
        tendv: "Honda Civic",
        anh: "./ảnh/seban/seban8.png",
        tt1: "1.5L Turbo, 174 mã lực, CVT.",
        gia: "950000000",
        category: "Sedan",
        size: "Sedan cỡ C",
        serves: "5 người",
        type: "sedan",
        tags: ["Honda", "Civic", "thể thao"]
    },
    {
        id: "sedan9",
        tendv: "Mazda6",
        anh: "./ảnh/seban/seban9.png",
        tt1: "2.5L SkyActiv-G, 192 mã lực, hộp số 6 cấp.",
        gia: "950000000",
        category: "Sedan",
        size: "Sedan cỡ D",
        serves: "5 người",
        type: "sedan",
        tags: ["Mazda", "Mazda6", "sang trọng"]
    },
    {
        id: "sedan10",
        tendv: "Hyundai Elantra",
        anh: "./ảnh/seban/seban10.png",
        tt1: "2.0L, 147 mã lực, hộp số 6 cấp.",
        gia: "680000000",
        category: "Sedan",
        size: "Sedan cỡ C",
        serves: "5 người",
        type: "sedan",
        tags: ["Hyundai", "Elantra", "thiết kế"]
    },
    {
        id: "sedan11",
        tendv: "Kia K3",
        anh: "./ảnh/seban/seban11.png",
        tt1: "1.6L, 128 mã lực, CVT.",
        gia: "610000000",
        category: "Sedan",
        size: "Sedan cỡ C",
        serves: "5 người",
        type: "sedan",
        tags: ["Kia", "K3", "trẻ trung"]
    },
    {
        id: "sedan12",
        tendv: "Toyota Camry",
        anh: "./ảnh/seban/seban12.png",
        tt1: "2.5L Hybrid, 208 mã lực, CVT.",
        gia: "1250000000",
        category: "Sedan",
        size: "Sedan cỡ D",
        serves: "5 người",
        type: "sedan",
        tags: ["Toyota", "Camry", "sang trọng"]
    },
    {
        id: "sedan13",
        tendv: "Honda Accord",
        anh: "./ảnh/seban/seban13.png",
        tt1: "1.5L Turbo, 192 mã lực, CVT.",
        gia: "1150000000",
        category: "Sedan",
        size: "Sedan cỡ D",
        serves: "5 người",
        type: "sedan",
        tags: ["Honda", "Accord", "sang trọng"]
    },
    {
        id: "sedan14",
        tendv: "Mercedes-Benz C-Class",
        anh: "./ảnh/seban/seban14.png",
        tt1: "2.0L Turbo, 255 mã lực, hộp số 9 cấp.",
        gia: "2100000000",
        category: "Sedan",
        size: "Sedan cỡ D",
        serves: "5 người",
        type: "sedan",
        tags: ["Mercedes", "C-Class", "hạng sang"]
    },
    {
        id: "sedan15",
        tendv: "BMW 3 Series",
        anh: "./ảnh/seban/seban15.png",
        tt1: "2.0L Turbo, 258 mã lực, hộp số 8 cấp.",
        gia: "1900000000",
        category: "Sedan",
        size: "Sedan cỡ D",
        serves: "5 người",
        type: "sedan",
        tags: ["BMW", "3 Series", "thể thao"]
    }
];

// Danh sách xe SUV (15 xe)
const suv1 = [
    {
        id: "suv1",
        tendv: "Toyota Fortuner",
        anh: "./ảnh/suv/suv1.png",
        tt1: "2.8L Diesel, 204 mã lực, hộp số 6 cấp.",
        gia: "1100000000",
        category: "SUV",
        size: "SUV 7 chỗ",
        serves: "7 người",
        type: "suv",
        tags: ["Toyota", "Fortuner", "off-road"]
    },
    {
        id: "suv2",
        tendv: "Hyundai Santa Fe",
        anh: "./ảnh/suv/suv2.Webp",
        tt1: "2.2L Diesel, 202 mã lực, hộp số 8 cấp.",
        gia: "950000000",
        category: "SUV",
        size: "SUV 7 chỗ",
        serves: "7 người",
        type: "suv",
        tags: ["Hyundai", "Santa Fe", "gia đình"]
    },
    {
        id: "suv3",
        tendv: "Ford Everest",
        anh: "./ảnh/suv/suv3.jpg",
        tt1: "2.0L Diesel, 180 mã lực, hộp số 10 cấp.",
        gia: "1000000000",
        category: "SUV",
        size: "SUV 7 chỗ",
        serves: "7 người",
        type: "suv",
        tags: ["Ford", "Everest", "off-road"]
    },
    {
        id: "suv4",
        tendv: "Mazda CX-5",
        anh: "./ảnh/suv/suv4.png",
        tt1: "2.5L SkyActiv, 188 mã lực, hộp số 6 cấp.",
        gia: "820000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Mazda", "CX-5", "thiết kế"]
    },
    {
        id: "suv5",
        tendv: "Kia Sorento",
        anh: "./ảnh/suv/suv5.jpg",
        tt1: "2.2L Diesel, 202 mã lực, hộp số 8 cấp.",
        gia: "980000000",
        category: "SUV",
        size: "SUV 7 chỗ",
        serves: "7 người",
        type: "suv",
        tags: ["Kia", "Sorento", "hiện đại"]
    },
    {
        id: "suv6",
        tendv: "Mitsubishi Outlander",
        anh: "./ảnh/suv/suv6.webp",
        tt1: "2.4L PHEV, 189 mã lực, CVT.",
        gia: "1050000000",
        category: "SUV",
        size: "SUV 7 chỗ",
        serves: "7 người",
        type: "suv",
        tags: ["Mitsubishi", "Outlander", "hybrid"]
    },
    {
        id: "suv7",
        tendv: "Honda CR-V",
        anh: "./ảnh/suv/suv7.jpg",
        tt1: "1.5L Turbo, 188 mã lực, CVT.",
        gia: "980000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Honda", "CR-V", "đáng tin cậy"]
    },
    {
        id: "suv8",
        tendv: "Nissan X-Trail",
        anh: "./ảnh/suv/suv8.jpg",
        tt1: "2.5L, 181 mã lực, CVT.",
        gia: "850000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Nissan", "X-Trail", "gia đình"]
    },
    {
        id: "suv9",
        tendv: "Subaru Forester",
        anh: "./ảnh/suv/suv9.jpg",
        tt1: "2.5L Boxer, 182 mã lực, CVT.",
        gia: "920000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Subaru", "Forester", "AWD"]
    },
    {
        id: "suv10",
        tendv: "Volkswagen Tiguan",
        anh: "./ảnh/suv/suv10.jpg",
        tt1: "2.0L Turbo, 190 mã lực, hộp số 7 cấp.",
        gia: "1100000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Volkswagen", "Tiguan", "châu Âu"]
    },
    {
        id: "suv11",
        tendv: "Peugeot 5008",
        anh: "./ảnh/suv/suv11.jpg",
        tt1: "1.6L Turbo, 180 mã lực, hộp số 6 cấp.",
        gia: "1200000000",
        category: "SUV",
        size: "SUV 7 chỗ",
        serves: "7 người",
        type: "suv",
        tags: ["Peugeot", "5008", "thiết kế"]
    },
    {
        id: "suv12",
        tendv: "Audi Q5",
        anh: "./ảnh/suv/suv12.jpg",
        tt1: "2.0L Turbo, 265 mã lực, hộp số 7 cấp.",
        gia: "1850000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Audi", "Q5", "hạng sang"]
    },
    {
        id: "suv13",
        tendv: "BMW X3",
        anh: "./ảnh/suv/suv13.jpg",
        tt1: "2.0L Turbo, 252 mã lực, hộp số 8 cấp.",
        gia: "1950000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["BMW", "X3", "thể thao"]
    },
    {
        id: "suv14",
        tendv: "Mercedes-Benz GLC",
        anh: "./ảnh/suv/suv14.jpg",
        tt1: "2.0L Turbo, 258 mã lực, hộp số 9 cấp.",
        gia: "2150000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Mercedes", "GLC", "hạng sang"]
    },
    {
        id: "suv15",
        tendv: "Lexus RX",
        anh: "./ảnh/suv/suv15.jpg",
        tt1: "3.5L V6, 308 mã lực, hộp số 8 cấp.",
        gia: "2800000000",
        category: "SUV",
        size: "SUV 5 chỗ",
        serves: "5 người",
        type: "suv",
        tags: ["Lexus", "RX", "sang trọng"]
    }
];

// Danh sách xe THỂ THAO (12 xe)
const sport1 = [
    {
        id: "sport1",
        tendv: "Porsche 911",
        anh: "./ảnh/sport/sp1.jpg",
        tt1: "3.0L Twin-Turbo, 385 mã lực, hộp số 8 cấp.",
        gia: "4500000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["Porsche", "911", "huyền thoại"]
    },
    {
        id: "sport2",
        tendv: "Ferrari F8 Tributo",
        anh: "./ảnh/sport/sp2.jpg",
        tt1: "3.9L V8 Twin-Turbo, 720 mã lực, hộp số 7 cấp.",
        gia: "8000000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["Ferrari", "F8", "siêu xe"]
    },
    {
        id: "sport3",
        tendv: "Lamborghini Huracán",
        anh: "./ảnh/sport/sp3.jpg",
        tt1: "5.2L V10, 640 mã lực, hộp số 7 cấp.",
        gia: "7500000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["Lamborghini", "Huracán", "siêu xe"]
    },
    {
        id: "sport4",
        tendv: "McLaren 720S",
        anh: "./ảnh/sport/sp4.jpg",
        tt1: "4.0L V8 Twin-Turbo, 720 mã lực, hộp số 7 cấp.",
        gia: "8200000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["McLaren", "720S", "siêu xe"]
    },
    {
        id: "sport5",
        tendv: "Aston Martin Vantage",
        anh: "./ảnh/sport/sp5.jpg",
        tt1: "4.0L V8 Twin-Turbo, 510 mã lực, hộp số 8 cấp.",
        gia: "3500000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["Aston Martin", "Vantage", "thể thao"]
    },
    {
        id: "sport6",
        tendv: "Audi R8",
        anh: "./ảnh/sport/sp6.jpg",
        tt1: "5.2L V10, 620 mã lực, hộp số 7 cấp.",
        gia: "3200000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["Audi", "R8", "siêu xe"]
    },
    {
        id: "sport7",
        tendv: "BMW M4",
        anh: "./ảnh/sport/sp7.jpg",
        tt1: "3.0L Twin-Turbo, 510 mã lực, hộp số 8 cấp.",
        gia: "2600000000",
        category: "Xe Thể Thao",
        size: "Coupe 4 chỗ",
        serves: "4 người",
        type: "sport",
        tags: ["BMW", "M4", "thể thao"]
    },
    {
        id: "sport8",
        tendv: "Mercedes-AMG GT",
        anh: "./ảnh/sport/sp8.jpg",
        tt1: "4.0L V8 Twin-Turbo, 530 mã lực, hộp số 7 cấp.",
        gia: "3500000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["Mercedes", "AMG GT", "siêu xe"]
    },
    {
        id: "sport9",
        tendv: "Nissan GT-R",
        anh: "./ảnh/sport/sp9.jpg",
        tt1: "3.8L V6 Twin-Turbo, 565 mã lực, hộp số 6 cấp.",
        gia: "2800000000",
        category: "Xe Thể Thao",
        size: "Coupe 4 chỗ",
        serves: "4 người",
        type: "sport",
        tags: ["Nissan", "GT-R", "huyền thoại"]
    },
    {
        id: "sport10",
        tendv: "Chevrolet Corvette",
        anh: "./ảnh/sport/sp10.jpg",
        tt1: "6.2L V8, 495 mã lực, hộp số 8 cấp.",
        gia: "2400000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        type: "sport",
        tags: ["Chevrolet", "Corvette", "Mỹ"]
    },
    {
        id: "sport11",
        tendv: "Ford Mustang",
        anh: "./ảnh/sport/sp11.jpg",
        tt1: "5.0L V8, 450 mã lực, hộp số 6 cấp.",
        gia: "1900000000",
        category: "Xe Thể Thao",
        size: "Coupe 4 chỗ",
        serves: "4 người",
        type: "sport",
        tags: ["Ford", "Mustang", "cơ bắp"]
    },
    {
        id: "sport12",
        tendv: "Dodge Challenger",
        anh: "./ảnh/sport/sp12.jpg",
        tt1: "6.4L V8, 485 mã lực, hộp số 6 cấp.",
        gia: "2100000000",
        category: "Xe Thể Thao",
        size: "Coupe 4 chỗ",
        serves: "4 người",
        type: "sport",
        tags: ["Dodge", "Challenger", "cơ bắp"]
    }
];

// Danh sách xe GIA ĐÌNH (10 xe)
const family1 = [
    {
        id: "family1",
        tendv: "Toyota Innova",
        anh: "./ảnh/family/fa1.jpg",
        tt1: "2.0L, 139 mã lực, hộp số 6 cấp.",
        gia: "750000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Toyota", "Innova", "gia đình"]
    },
    {
        id: "family2",
        tendv: "Hyundai Starex",
        anh: "./ảnh/family/fa2.jpg",
        tt1: "2.5L Diesel, 170 mã lực, hộp số 5 cấp.",
        gia: "850000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Hyundai", "Starex", "đa dụng"]
    },
    {
        id: "family3",
        tendv: "Ford Transit",
        anh: "./ảnh/family/fa3.jpg",
        tt1: "2.0L Diesel, 130 mã lực, hộp số 6 cấp.",
        gia: "900000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Ford", "Transit", "gia đình"]
    },
    {
        id: "family4",
        tendv: "Kia Carnival",
        anh: "./ảnh/family/fa4.jpg",
        tt1: "2.2L Diesel, 202 mã lực, hộp số 8 cấp.",
        gia: "980000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Kia", "Carnival", "sang trọng"]
    },
    {
        id: "family5",
        tendv: "Mitsubishi Xpander",
        anh: "./ảnh/family/fa5.jpg",
        tt1: "1.5L, 105 mã lực, CVT.",
        gia: "620000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Mitsubishi", "Xpander", "giá rẻ"]
    },
    {
        id: "family6",
        tendv: "Honda Odyssey",
        anh: "./ảnh/family/fa6.jpg",
        tt1: "3.5L V6, 280 mã lực, hộp số 10 cấp.",
        gia: "1500000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Honda", "Odyssey", "sang trọng"]
    },
    {
        id: "family7",
        tendv: "Nissan Serena",
        anh: "./ảnh/family/fa7.jpg",
        tt1: "2.0L Hybrid, 150 mã lực, CVT.",
        gia: "1100000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Nissan", "Serena", "hybrid"]
    },
    {
        id: "family8",
        tendv: "Toyota Alphard",
        anh: "./ảnh/family/fa8.jpg",
        tt1: "3.5L V6, 301 mã lực, hộp số 8 cấp.",
        gia: "2500000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Toyota", "Alphard", "hạng sang"]
    },
    {
        id: "family9",
        tendv: "Mercedes-Benz V-Class",
        anh: "./ảnh/family/fa9.jpg",
        tt1: "2.0L Diesel, 190 mã lực, hộp số 9 cấp.",
        gia: "2800000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Mercedes", "V-Class", "sang trọng"]
    },
    {
        id: "family10",
        tendv: "Volkswagen Multivan",
        anh: "./ảnh/family/fa10.jpg",
        tt1: "2.0L Diesel, 150 mã lực, hộp số 7 cấp.",
        gia: "1800000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        type: "family",
        tags: ["Volkswagen", "Multivan", "Đức"]
    }
];

// Danh sách xe ĐIỆN & HYBRID (8 xe)
const electric1 = [
    {
        id: "electric1",
        tendv: "Tesla Model 3",
        anh: "./ảnh/electric/el1.jpg",
        tt1: "Động cơ điện, 283 mã lực, pin 75 kWh, phạm vi 491 km.",
        gia: "1800000000",
        category: "Xe Điện & Hybrid",
        size: "Sedan điện",
        serves: "5 người",
        type: "electric",
        tags: ["Tesla", "Model 3", "điện"]
    },
    {
        id: "electric2",
        tendv: "Tesla Model Y",
        anh: "./ảnh/electric/el2.jpg",
        tt1: "Động cơ điện, 384 mã lực, pin 75 kWh, phạm vi 450 km.",
        gia: "2000000000",
        category: "Xe Điện & Hybrid",
        size: "SUV điện",
        serves: "5 người",
        type: "electric",
        tags: ["Tesla", "Model Y", "SUV điện"]
    },
    {
        id: "electric3",
        tendv: "Hyundai Ioniq 5",
        anh: "./ảnh/electric/el3.jpg",
        tt1: "Động cơ điện, 225 mã lực, pin 72.6 kWh, phạm vi 470 km.",
        gia: "1400000000",
        category: "Xe Điện & Hybrid",
        size: "SUV điện",
        serves: "5 người",
        type: "electric",
        tags: ["Hyundai", "Ioniq 5", "điện"]
    },
    {
        id: "electric4",
        tendv: "Kia EV6",
        anh: "./ảnh/electric/el4.jpg",
        tt1: "Động cơ điện, 229 mã lực, pin 77.4 kWh, phạm vi 475 km.",
        gia: "1450000000",
        category: "Xe Điện & Hybrid",
        size: "SUV điện",
        serves: "5 người",
        type: "electric",
        tags: ["Kia", "EV6", "điện"]
    },
    {
        id: "electric5",
        tendv: "VinFast VF 8",
        anh: "./ảnh/electric/el5.jpg",
        tt1: "Động cơ điện, 402 mã lực, pin 88 kWh, phạm vi 400 km.",
        gia: "1200000000",
        category: "Xe Điện & Hybrid",
        size: "SUV điện",
        serves: "5 người",
        type: "electric",
        tags: ["VinFast", "VF 8", "Việt Nam"]
    },
    {
        id: "electric6",
        tendv: "VinFast VF 9",
        anh: "./ảnh/electric/el6.jpg",
        tt1: "Động cơ điện, 402 mã lực, pin 108 kWh, phạm vi 450 km.",
        gia: "1500000000",
        category: "Xe Điện & Hybrid",
        size: "SUV điện 7 chỗ",
        serves: "7 người",
        type: "electric",
        tags: ["VinFast", "VF 9", "Việt Nam"]
    },
    {
        id: "electric7",
        tendv: "Toyota Prius",
        anh: "./ảnh/electric/el7.jpg",
        tt1: "1.8L Hybrid, 122 mã lực, CVT.",
        gia: "900000000",
        category: "Xe Điện & Hybrid",
        size: "Sedan hybrid",
        serves: "5 người",
        type: "electric",
        tags: ["Toyota", "Prius", "hybrid"]
    },
    {
        id: "electric8",
        tendv: "Honda Insight",
        anh: "./ảnh/electric/el8.jpg",
        tt1: "1.5L Hybrid, 151 mã lực, CVT.",
        gia: "850000000",
        category: "Xe Điện & Hybrid",
        size: "Sedan hybrid",
        serves: "5 người",
        type: "electric",
        tags: ["Honda", "Insight", "hybrid"]
    }
];

function createProductCard(product, containerId, cardClass) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Không tìm thấy container: ${containerId}`);
            return;
        }
        
        if (!product || !product.id) {
            console.error('Dữ liệu sản phẩm không hợp lệ:', product);
            return;
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
            </div>
            <div class="product-info">
                <div class="ten">${product.tendv || 'Sản phẩm không tên'}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                <div class="gia">${formattedPrice} VNĐ</div>
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Click vào card để xem chi tiết
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Click nút thêm vào giỏ hàng
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    const currentUser = localStorage.getItem('currentUser');
                    if (!currentUser) {
                        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
                        setTimeout(() => {
                            window.location.href = 'login.html';
                        }, 1000);
                        return;
                    }
                    
                    if (window.cartManager && typeof window.cartManager.addToCart === 'function') {
                        const success = window.cartManager.addToCart(product, 1);
                        if (success) {
                            showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                            
                            this.style.backgroundColor = '#4CAF50';
                            this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                            setTimeout(() => {
                                this.style.backgroundColor = '';
                                this.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                            }, 1000);
                        }
                    } else {
                        const cart = JSON.parse(localStorage.getItem('cart')) || [];
                        const existingItem = cart.find(item => item.id === product.id);
                        
                        if (existingItem) {
                            existingItem.quantity += 1;
                        } else {
                            cart.push({
                                id: product.id,
                                name: product.tendv,
                                image: product.anh || './ảnh/default-cake.jpg',
                                price: parseInt(product.gia || 0),
                                quantity: 1,
                                category: product.category || 'Không phân loại'
                            });
                        }
                        
                        localStorage.setItem('cart', JSON.stringify(cart));
                        updateCartCount();
                        showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                        
                        this.style.backgroundColor = '#4CAF50';
                        this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                        setTimeout(() => {
                            this.style.backgroundColor = '';
                            this.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Lỗi khi thêm vào giỏ hàng:', error);
                    showNotification('Không thể thêm sản phẩm vào giỏ hàng', 'error');
                }
            });
        }
        
        // Click nút xem chi tiết
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        container.appendChild(card);
        
    } catch (error) {
        console.error(`Lỗi khi tạo card cho sản phẩm:`, error);
    }
}

function formatPriceFallback(price) {
    try {
        return parseInt(price || 0).toLocaleString('vi-VN');
    } catch (e) {
        return '0';
    }
}

function displayProductList(products, containerId, cardClass) {
    try {
        if (!products || !Array.isArray(products)) {
            console.error('Danh sách sản phẩm không hợp lệ:', products);
            return;
        }
        
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Không tìm thấy container: ${containerId}`);
            return;
        }
        
        container.innerHTML = '';
        
        // CHỈ HIỂN THỊ 9 SẢN PHẨM ĐẦU TIÊN
        const limitedProducts = products.slice(0, 12);
        
        limitedProducts.forEach(product => {
            createProductCard(product, containerId, cardClass);
        });
        
        console.log(`Đã hiển thị ${limitedProducts.length} sản phẩm trong ${containerId}`);
    } catch (error) {
        console.error('Lỗi khi hiển thị danh sách sản phẩm:', error);
    }
}

function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
        
        document.querySelectorAll('#cart-badge, .cart-badge').forEach(badge => {
            if (badge) {
                badge.textContent = totalItems > 99 ? '99+' : totalItems;
                badge.style.display = totalItems > 0 ? 'flex' : 'none';
            }
        });
        
        return totalItems;
    } catch (error) {
        console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
        return 0;
    }
}

function showNotification(message, type = 'success') {
    try {
        let notification = document.getElementById('global-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'global-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 8px;
                color: white;
                font-weight: bold;
                z-index: 9999;
                display: none;
                min-width: 300px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            `;
            document.body.appendChild(notification);
        }
        
        const colors = {
            'success': 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            'error': 'linear-gradient(135deg, #ff5252, #d32f2f)',
            'info': 'linear-gradient(135deg, #2196F3, #1976D2)',
            'warning': 'linear-gradient(135deg, #FF9800, #F57C00)'
        };
        
        notification.style.background = colors[type] || colors['success'];
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        notification.style.display = 'block';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    } catch (error) {
        console.error('Lỗi khi hiển thị thông báo:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hiển thị sản phẩm xe hơi...');
    
    try {
        // CHỈ HIỂN THỊ 9 SẢN PHẨM MỖI DANH MỤC
        displayProductList(sedan1.slice(0, 9), "danhsach1", "ten-card1");
        displayProductList(suv1.slice(0, 9), "danhsach2", "ten-card2");
        displayProductList(sport1.slice(0, 9), "danhsach3", "ten-card3");
        displayProductList(family1.slice(0, 9), "danhsach4", "ten-card4");
        displayProductList(electric1.slice(0, 9), "danhsach5", "ten-card5");
        
        console.log('Đã hiển thị tất cả sản phẩm xe hơi (9 sản phẩm mỗi danh mục)');
    } catch (error) {
        console.error('Lỗi khi hiển thị sản phẩm:', error);
    }
});

window.displayProductList = displayProductList;
window.updateCartCount = updateCartCount;
window.showNotification = showNotification;

// ============================================
// HỆ THỐNG PHÂN TRANG VÀ LỌC SẢN PHẨM
// ============================================

// Cấu hình phân trang - CHỈ HIỂN THỊ 9 SẢN PHẨM MỖI TRANG
const PRODUCTS_PER_PAGE = 9;

// Hợp nhất tất cả sản phẩm
const ALL_PRODUCTS = [
    ...sedan1.map(p => ({...p, type: 'sedan'})),
    ...suv1.map(p => ({...p, type: 'suv'})),
    ...sport1.map(p => ({...p, type: 'sport'})),
    ...family1.map(p => ({...p, type: 'family'})),
    ...electric1.map(p => ({...p, type: 'electric'}))
];

// Biến toàn cục
let currentCategory = 'all';
let currentPage = 1;
let filteredProducts = [...ALL_PRODUCTS];

// Hàm lọc sản phẩm theo danh mục
function filterProducts(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Cập nhật active state cho danh mục
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.onclick && item.onclick.toString().includes(`'${category}'`)) {
            item.classList.add('active');
        }
    });
    
    // Lọc sản phẩm
    if (category === 'all') {
        filteredProducts = [...ALL_PRODUCTS];
        document.getElementById('category-title').textContent = 'TẤT CẢ XE';
        document.getElementById('category-description').textContent = 'Khám phá những dòng xe hơi đa dạng, chất lượng';
    } else if (category === 'sedan') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'sedan');
        document.getElementById('category-title').textContent = 'XE SEDAN';
        document.getElementById('category-description').textContent = 'Những chiếc sedan sang trọng, tiết kiệm nhiên liệu';
    } else if (category === 'suv') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'suv');
        document.getElementById('category-title').textContent = 'XE SUV';
        document.getElementById('category-description').textContent = 'SUV đa dụng, mạnh mẽ cho mọi địa hình';
    } else if (category === 'sport') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'sport');
        document.getElementById('category-title').textContent = 'XE THỂ THAO';
        document.getElementById('category-description').textContent = 'Siêu xe thể thao tốc độ, đẳng cấp';
    } else if (category === 'family') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'family');
        document.getElementById('category-title').textContent = 'XE GIA ĐÌNH';
        document.getElementById('category-description').textContent = 'Xe gia đình rộng rãi, tiện nghi, an toàn';
    } else if (category === 'electric') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'electric');
        document.getElementById('category-title').textContent = 'XE ĐIỆN & HYBRID';
        document.getElementById('category-description').textContent = 'Xe điện và hybrid tiên tiến, thân thiện môi trường';
    } else if (category === 'sale') {
        // Sản phẩm giảm giá (demo)
        filteredProducts = ALL_PRODUCTS.slice(0, 15).map(p => ({
            ...p,
            originalPrice: parseInt(p.gia) * 1.2
        }));
        document.getElementById('category-title').textContent = 'XE KHUYẾN MÃI';
        document.getElementById('category-description').textContent = 'Những ưu đãi hấp dẫn đang chờ bạn';
    } else if (category === 'new') {
        // Sản phẩm mới (demo - lấy 10 sản phẩm đầu)
        filteredProducts = ALL_PRODUCTS.slice(0, 10);
        document.getElementById('category-title').textContent = 'XE MỚI';
        document.getElementById('category-description').textContent = 'Những dòng xe mới nhất của AutoStore';
    }
    
    // Hiển thị sản phẩm
    renderProducts();
    renderPagination();


const productsContainer = document.querySelector('.products-main-content');
    if (productsContainer) {
        productsContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Hàm hiển thị sản phẩm
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Tính toán sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Xóa nội dung cũ
    grid.innerHTML = '';
    
    // Hiển thị sản phẩm
    productsToShow.forEach(product => {
        const cardClass = getCardClassByType(product.type);
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        // Kiểm tra nếu có giá gốc (sale)
        let priceHTML = `<div class="gia">${formattedPrice} VNĐ</div>`;
        if (product.originalPrice) {
            const originalFormatted = window.formatPrice ? 
                window.formatPrice(product.originalPrice) : 
                formatPriceFallback(product.originalPrice);
            priceHTML = `
                <div class="gia sale-price">
                    <span class="original-price">${originalFormatted} VNĐ</span>
                    <span class="current-price">${formattedPrice} VNĐ</span>
                    <span class="discount-badge">-20%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
                ${product.originalPrice ? '<div class="sale-tag">Sale</div>' : ''}
                ${currentCategory === 'new' ? '<div class="new-tag">Mới</div>' : ''}
            </div>
            <div class="product-info">
                <div class="ten">${product.tendv || 'Sản phẩm không tên'}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                ${priceHTML}
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Thêm sự kiện click
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Sự kiện cho nút thêm vào giỏ
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                handleAddToCart(product, this);
            });
        }
        
        // Sự kiện cho nút xem chi tiết
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        grid.appendChild(card);
    });
    
    // Nếu không có sản phẩm
    if (productsToShow.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-box-open" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy xe</h3>
                <p style="color: #999;">Hiện không có xe nào trong danh mục này.</p>
            </div>
        `;
    }
}

// Hàm hiển thị phân trang
function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    
    // Nếu chỉ có 1 trang thì ẩn phân trang
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Nút Previous
    html += `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Các trang số
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    // Nút Next
    html += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    // Thông tin phân trang
    const startItem = (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length);
    
    html += `
        <div class="pagination-info">
            Hiển thị ${startItem}-${endItem} của ${filteredProducts.length} xe
        </div>
    `;
    
    pagination.innerHTML = html;
}

// Hàm chuyển trang
function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)) {
        return;
    }
    
    currentPage = page;
    renderProducts();
    renderPagination();
    
    // Cuộn lên đầu phần sản phẩm
    document.querySelector('.products-main-content').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Hàm lấy class card theo loại
function getCardClassByType(type) {
    switch(type) {
        case 'sedan': return 'ten-card1';
        case 'suv': return 'ten-card2';
        case 'sport': return 'ten-card3';
        case 'family': return 'ten-card4';
        case 'electric': return 'ten-card5';
        default: return 'ten-card1';
    }
}

// Hàm xử lý thêm vào giỏ hàng
function handleAddToCart(product, button) {
    try {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
            return;
        }
        
        if (window.cartManager && typeof window.cartManager.addToCart === 'function') {
            const success = window.cartManager.addToCart(product, 1);
            if (success) {
                showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                
                button.style.backgroundColor = '#4CAF50';
                button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                setTimeout(() => {
                    button.style.backgroundColor = '';
                    button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                }, 1000);
            }
        } else {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.tendv,
                    image: product.anh || './ảnh/default-cake.jpg',
                    price: parseInt(product.gia || 0),
                    quantity: 1,
                    category: product.category || 'Không phân loại',
                    type: product.type || 'unknown'
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
            
            button.style.backgroundColor = '#4CAF50';
            button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
            setTimeout(() => {
                button.style.backgroundColor = '';
                button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
            }, 1000);
        }
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
        showNotification('Không thể thêm sản phẩm vào giỏ hàng', 'error');
    }
}

// Hàm khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hệ thống phân trang và lọc sản phẩm...');
    
    // Kiểm tra xem đã có phần hiển thị sản phẩm mới chưa
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        // Ẩn các phần hiển thị sản phẩm cũ
        document.querySelectorAll('.ten-container1, .ten-container2, .ten-container3, .ten-container4, .ten-container5').forEach(container => {
            container.style.display = 'none';
        });
        
        document.querySelectorAll('#products, h2:nth-of-type(2), h2:nth-of-type(3), h2:nth-of-type(4), h2:nth-of-type(5)').forEach(el => {
            el.style.display = 'none';
        });
        
        // Khởi tạo hiển thị sản phẩm
        filterProducts('all');
    } else {
        // Nếu không có phần hiển thị mới, dùng hệ thống cũ
        console.log('Sử dụng hệ thống hiển thị sản phẩm cũ...');
        displayProductList(dsbanh1.slice(0, 9), "danhsach1", "ten-card1");
        displayProductList(dsbanh2.slice(0, 9), "danhsach2", "ten-card2");
        displayProductList(dsbanh3.slice(0, 9), "danhsach3", "ten-card3");
        displayProductList(dsbanh4.slice(0, 9), "danhsach4", "ten-card4");
        displayProductList(dsbanh5.slice(0, 9), "danhsach5", "ten-card5");
    }
});

// Thêm CSS cho giá sale
const style = document.createElement('style');
style.textContent = `
    .sale-price {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .sale-price .original-price {
        text-decoration: line-through;
        color: #999;
        font-size: 16px;
    }
    
    .sale-price .current-price {
        color: #e91e63;
        font-size: 22px;
        font-weight: bold;
    }
    
    .sale-price .discount-badge {
        background: #e91e63;
        color: white;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
        display: inline-block;
        margin-top: 5px;
    }
    
    .product-image {
        position: relative;
    }
    
    .sale-tag, .new-tag {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #e91e63;
        color: white;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
        z-index: 2;
    }
    
    .new-tag {
        background: #4CAF50;
    }
`;
document.head.appendChild(style);

// Export functions to global scope
window.filterProducts = filterProducts;
window.changePage = changePage;
window.handleAddToCart = handleAddToCart;

// ============================================
// HỆ THỐNG TÌM KIẾM SẢN PHẨM
// ============================================

let isSearching = false;
let searchResults = [];
let searchQuery = '';

// Hàm tìm kiếm sản phẩm
function searchProducts(event) {
    if (event.key === 'Enter') {
        performSearch();
        return;
    }
    
    // Tự động tìm kiếm sau 500ms ngừng gõ
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
        performSearch();
    }, 500);
}

// Thực hiện tìm kiếm
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchQuery = searchInput.value.trim().toLowerCase();
    
    if (searchQuery.length === 0) {
        // Nếu ô tìm kiếm trống, hiển thị lại danh mục hiện tại
        isSearching = false;
        document.getElementById('search-results-header').style.display = 'none';
        filterProducts(currentCategory);
        return;
    }
    
    isSearching = true;
    
    // Tìm kiếm trong tất cả sản phẩm
    searchResults = ALL_PRODUCTS.filter(product => {
        const searchFields = [
            product.tendv || '',
            product.category || '',
            product.tt1 || '',
            product.size || '',
            product.serves || '',
            ...(product.tags || [])
        ].join(' ').toLowerCase();
        
        return searchFields.includes(searchQuery);
    });
    
    // Hiển thị kết quả tìm kiếm
    displaySearchResults();
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults() {
    const resultsHeader = document.getElementById('search-results-header');
    const resultsCount = document.getElementById('search-results-count');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    
    if (searchResults.length === 0) {
        // Không tìm thấy kết quả
        const grid = document.getElementById('products-grid');
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy xe</h3>
                <p>Không tìm thấy xe nào phù hợp với từ khóa "<strong>${searchQuery}</strong>"</p>
                <button class="promo-btn" onclick="clearSearch()" style="max-width: 200px; margin: 0 auto;">
                    <i class="fas fa-times"></i> Xóa tìm kiếm
                </button>
            </div>
        `;
        
        resultsHeader.style.display = 'block';
        resultsCount.textContent = `Tìm thấy 0 xe cho "${searchQuery}"`;
        document.getElementById('pagination').innerHTML = '';
        
    } else {
        // Có kết quả tìm kiếm
        resultsHeader.style.display = 'block';
        resultsCount.textContent = `Tìm thấy ${searchResults.length} xe cho "${searchQuery}"`;
        
        categoryTitle.textContent = 'KẾT QUẢ TÌM KIẾM';
        categoryDescription.textContent = `Tìm kiếm: "${searchQuery}"`;
        
        // Hiển thị sản phẩm tìm được
        filteredProducts = searchResults;
        currentPage = 1;
        renderProducts();
        renderPagination();
    }
}

// Xóa tìm kiếm
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    isSearching = false;
    searchQuery = '';
    searchResults = [];
    
    document.getElementById('search-results-header').style.display = 'none';
    
    // Quay lại danh mục hiện tại
    filterProducts(currentCategory);
}

// Cập nhật hàm filterProducts để xử lý khi đang tìm kiếm
const originalFilterProducts = window.filterProducts;
window.filterProducts = function(category) {
    // Nếu đang tìm kiếm, xóa tìm kiếm trước
    if (isSearching) {
        clearSearch();
    }
    
    // Gọi hàm filterProducts gốc
    originalFilterProducts(category);
};

// Cập nhật hàm renderProducts để hỗ trợ highlight từ khóa
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Tính toán sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Xóa nội dung cũ
    grid.innerHTML = '';
    
    // Hiển thị sản phẩm
    productsToShow.forEach(product => {
        const cardClass = getCardClassByType(product.type);
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        // Highlight từ khóa tìm kiếm nếu đang tìm kiếm
        let productName = product.tendv || 'Sản phẩm không tên';
        if (isSearching && searchQuery) {
            productName = highlightSearchText(productName, searchQuery);
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        // Kiểm tra nếu có giá gốc (sale)
        let priceHTML = `<div class="gia">${formattedPrice} VNĐ</div>`;
        if (product.originalPrice) {
            const originalFormatted = window.formatPrice ? 
                window.formatPrice(product.originalPrice) : 
                formatPriceFallback(product.originalPrice);
            priceHTML = `
                <div class="gia sale-price">
                    <span class="original-price">${originalFormatted} VNĐ</span>
                    <span class="current-price">${formattedPrice} VNĐ</span>
                    <span class="discount-badge">-20%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
                ${product.originalPrice ? '<div class="sale-tag">Sale</div>' : ''}
                ${currentCategory === 'new' ? '<div class="new-tag">Mới</div>' : ''}
            </div>
            <div class="product-info">
                <div class="ten">${productName}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                ${priceHTML}
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Thêm sự kiện click (giữ nguyên từ code cũ)
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Sự kiện cho nút thêm vào giỏ (giữ nguyên)
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                handleAddToCart(product, this);
            });
        }
        
        // Sự kiện cho nút xem chi tiết (giữ nguyên)
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        grid.appendChild(card);
    });
    
    // Nếu không có sản phẩm
    if (productsToShow.length === 0 && !isSearching) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-box-open" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy xe</h3>
                <p style="color: #999;">Hiện không có xe nào trong danh mục này.</p>
            </div>
        `;
    }
}

// Hàm highlight từ khóa tìm kiếm
function highlightSearchText(text, query) {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Thêm CSS cho highlight
const highlightStyle = document.createElement('style');
highlightStyle.textContent = `
    .search-highlight {
        background: linear-gradient(135deg, #ffeb3b, #ffc107);
        color: #333;
        padding: 2px 5px;
        border-radius: 4px;
        font-weight: bold;
    }
`;
document.head.appendChild(highlightStyle);

// Export hàm tìm kiếm ra global scope
window.searchProducts = searchProducts;
window.performSearch = performSearch;
window.clearSearch = clearSearch;

imgElement.onerror = function() {
    this.onerror = null; // Chặn vòng lặp: Chỉ chạy lỗi đúng 1 lần rồi thôi
    this.src = 'anh/default-cake.jpg'; 
};
