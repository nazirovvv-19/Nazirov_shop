import React from 'react';


function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <p className="text-sm">Savolingiz bormi? Qo‘ng‘iroq qiling</p>
          <h3 className="text-xl font-bold mt-1 mb-4">+998 71 209 99 44</h3>
          <div className="flex gap-3 mt-2">
            
          </div>
          <a href="#" className="text-sm underline mt-4 inline-block">Do`konlar manzillari</a>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Kompaniya</h4>
          <ul className="space-y-1 text-sm">
            <li>Yuridik shaxslar uchun</li>
            <li>Biz haqimizda</li>
            <li>Yangiliklar va bloglar</li>
            <li>IMEI ni tekshirish</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Ma'lumot</h4>
          <ul className="space-y-1 text-sm">
            <li>Bepul yetkazib berish</li>
            <li>Texnomartda ishlash</li>
            <li>Shaxsiy kabinet</li>
            <li>Aloqa raqamlari</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Haridorga yordam</h4>
          <ul className="space-y-1 text-sm">
            <li>Maxsulotni qaytarish</li>
            <li>Mahsulotlar uchun kafolat</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">Ilovani yuklab olish</h4>
          <div className="flex md:flex-col items-center gap-4 mt-2">
            <img
              src="https://texnomart.uz/_nuxt/img/qr_code_footer.f794a42.png"
              alt="QR code"
              className="w-24 h-24 rounded bg-[#2e2e2e] p-1"
            />
            <div className="flex gap-2 mt-2">
           
            </div>
          </div>
          <p className="text-xs mt-2 text-gray-400">Yuklab olish uchun QR-kodni skanerlash</p>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="text-center text-sm text-gray-400">
        2016–2025 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko‘rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi
      </div>
    </footer>
  );
};

export default Footer;
