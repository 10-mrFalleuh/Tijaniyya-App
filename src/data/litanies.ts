export interface Litany {
  id: number;
  arName: string;
  enName: string;
  frName: string;
  arContent: string;
  frContent: string;
  enContent: string;
  msContent?: string;
  esContent?: string;
  trContent?: string;
  faContent?: string;
  total: number;
  transcription: string;
  audioUrl: string | null;
  tasbihId: number;
  numOrder: number;
}

export interface WirdSection {
  id: number;
  nameAr: string;
  nameFr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionFr: string;
  descriptionEn: string;
  descriptionMs: string;
  descriptionEs: string;
  descriptionTr: string;
  descriptionFa?: string;
  image: string;
  color: string;
  litanies: Litany[];
}

const CDN_BASE = 'https://public.youware.com/users-website-assets/prod/8425d408-f075-4b23-a8e2-8ef5a8caae48/';

export const IMAGES = {
  medinaGreen: `${CDN_BASE}9f08fc0ff16941408e76ac78243d4ee0.jpg`,
  nabawiSunrise: `${CDN_BASE}8d39197d3e044b218e172fb12006c4a0.jpg`,
  nabawi: `${CDN_BASE}511ef7b8b69d47c5afd152ad71de8e37.jpg`,
  quba: `${CDN_BASE}a5c6e76aa8dc4e55afbd427a9760b65f.jpg`,
};

// Final Prayer (Douaa) - Comprehensive prayer from user files
const finalPrayer: Litany = {
  id: 100,
  arName: 'دعاء الختام',
  enName: 'Closing Prayer',
  frName: 'Prière de clôture',
  arContent: 'فِي بُيُوتٍ أَذِنَ اللَّهُ أَن تُرْفَعَ وَيُذْكَرَ فِيهَا اسْمُهُ يُسَبِّحُ لَهُ فِيهَا بِالْغُدُوِّ وَالْآصَالِ - الْحَمْدُ لِلَّهِ الَّذِى هَدَانَا لِهَذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ - هَذِهِ هَدِيَّةٌ بِفَضْلِ اللَّهِ مَنًّا إِلَيْكَ يَا رَسُولَ اللَّهِ عَلَيْكَ السَّلَامُ - اَللَّهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ - جَزَى اللَّهُ عَنَّا سَيِّدَنَا وَنَبِيَّنَا وَمَوْلَانَا مُحَمَّدًا صَلَّى اللَّهُ تَعَالَى عَلَيْهِ وَسَلَّمَ - وَرَضِيَ اللَّهُ عَنْ شَيْخِنَا التِّيجَانِيِّ وَمَنْ لَنَا إِلَيْهِ وَسِيلَةٌ كَاشِفَةٌ لِلْأَغَمَامِ - وَمَنْ تَعَلَّقَ بِالْأَذْيَالِ قَاطِبَةً صُبَّ عَلَيْنَا إِلَاهِي أَبْحَارَ الْعِصَمِ - وَكُلٌّ مِمَّنْ طَلَبُوا صَالِحَ دَعْوَتِنَا وَغَيْرِهِمْ مِنْ ذَوِي الْإِيمَانِ كُلِّهِمْ - فَاقْبَلْ إِلَاهِي يَا رَحْمَنُ تَوْبَتَنَا بِالْفَضْلِ وَالْجُودِ وَالرِّضْوَانِ وَالْكَرَمِ - كَذَا أُصُولُنَا وَأَحْبَابُنَا أُصُولُهُمْ عَمِّمْهُمْ رَبِّ تَعْمِيمًا بِذِي الْأُطُرِ وَمَنْ لَنَا مُحْسِنٌ وَمَنْ نُسِيءُ لَهُ يَا رَبَّنَا يَا رَبَّنَا يَا وَاسِعَ الرُّحْمِ - وَمَا نُؤَدِّي مِنَ الْأَذْكَارِ جُمْلَتِهَا فَاقْبَلْهَا لَنَا يَا فَارِجَ الْهَمَمِ - رَبِّي اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا - رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا - رَبَّنَا إِنَّكَ رَؤُوفٌ رَحِيمٌ - رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ - ادْعُوا بِبِسْمِ اللَّهِ وَالْمَثَانِي وَآيَةِ الْكُرْسِيِّ ذِي الْمَعَانِي - وَسُورَةِ الْإِخْلَاصِ ذِي التَّمْجِيدِ - وَفَازَ مَنْ مَاتَ عَلَى التَّوْحِيدِ - وَمَنْ دَعَا بِذَا عَلَى الْيَقِينِ يُجَبْ بِمَا رَامَ مِنَ الْمَتِينِ - مُجِيبٌ يَا مُجِيبُ يَا مُجِيبُ فَاقْبَلْ دُعَاءَ وَجِلٍّ قَرِيبٌ - نَسْأَلُكَ التَّسْلِيمَ بِالْقَضَاءِ وَالصَّبْرَ وَالرِّضَى لَدَى الْبَلَاءِ - بِالْمُصْطَفَى الشَّافِعِ كُلِّ الْخَلْقِ ثَبِّتْ إِلَاهِي مَنْطِقِي بِالْحَقِّ - أَزْكَى صَلَاةِ اللَّهِ وَالتَّسْلِيمِ عَلَى الَّذِي بُشِّرَ بِالتَّسْنِيمِ - وَعَلَى آلِهِ وَصَحْبِهِ الْغِرَارِ وَالتَّابِعِينَ ثُمَّ الْأَوْلِيَاءِ - يَا رَبَّنَا يَا مَالِكَ الْكَوْنَيْنِ قِنَا إِلَاهِي الشَّرَّ فِي الدَّارَيْنِ - أَمَاتَنَا اللَّهُ عَلَى دِينِ النَّبِيِّ وَحُبِّ شَيْخِنَا الْإِمَامِ الطَّيِّبِ - آمِينَ اسْتَجِبْ دُعَاءَنَا وَلَا تُخَيِّبْ سَيِّدِي رَجَاءَنَا أَرْجُو الْأَمَانَ يَوْمَ لَا أَمَانَ إِلَّا لِمَنْ آمَنَهُ مَوْلَانَا - اللَّهُمَّ أَكْرِمْ مَنْ ذَكَرَ خَاتَمَ الْأَنْبِيَاءِ بِجَوْهَرَةِ الْكَمَالِ - نَوِّرِ اللَّهُ الْوَجْهَ وَالْأُمُورَ لِمَنْ صَلَّى عَلَى الشَّافِعِ الْأَكْرَمِ بِالصَّلَاةِ الْفَاتِحَةِ الْمَقْبُولَةِ - إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا - سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ وَسَلَامٌ عَلَى الْمُرْسَلِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ - تَوْبَةً نَصُوحًا لِمَنْ حَضَرَ أَوْ سَمِعَ صَلَاةً عَلَى النَّبِيِّ وَجَوْهَرَةَ الْكَمَالِ وَفَازَ مَنْ رَفَعَ الِاسْمَ الْجَلَالِي فِي الْعَفْوِ ثُمَّ سَبَّحَ اللَّهَ الْحَيَّ الْقَيُّومَ بِالْغُدُوِّ وَالْآصَالِ',
  frContent: "Dans des maisons (zawiya ou mosquée) qu'Allah a permis que l'on élève et où Son nom est invoqué. Là, on Le glorifie matin et soir. Louange à Allah qui nous a guidés vers ceci. Nous n'aurions jamais été guidés si Allah ne nous avait pas guidés. Voici un don, par la grâce d'Allah, que nous T'offrons, ô Messager d'Allah, sur toi le salut. Ô Allah, notre Seigneur, accepte de nous ce don. Tu es Celui qui entend, Celui qui sait. Reviens vers nous, car Tu es l'Accueillant au repentir, le Très Miséricordieux. Qu'Allah récompense pour nous notre maître, notre prophète et notre seigneur Muhammad — qu'Allah le Très-Haut prie sur lui et le salue. Qu'Allah agrée le Cheikh Tijānī, notre intercesseur vers Lui, dissipateur des soucis. Et tous ceux qui s'accrochent à ses pans — déverse sur nous, mon Dieu, les océans de la protection. Et tous ceux qui ont demandé que nous priions pour leur bien, ainsi que les autres croyants, tous sans exception. Accepte donc, mon Dieu, ô Tout-Miséricordieux, notre repentir, par la grâce, la générosité, l'agrément et la noblesse. De même nos ancêtres et nos proches, ainsi que les leurs : enveloppe-les, Seigneur, d'une généralité empreinte de sagesse. Et ceux qui nous ont fait du bien comme ceux à qui nous avons nui — ô notre Seigneur, ô Toi à la miséricorde immense. Et toutes les invocations que nous accomplissons — accepte-les pour eux, ô Toi qui dissipes les soucis. Mon Seigneur, pardonne-moi ainsi qu'à mes parents et fais-leur miséricorde comme ils m'ont élevé tout petit. Notre Seigneur, pardonne-nous, ainsi qu'à nos frères qui nous ont précédés dans la foi ; et ne mets pas dans nos cœurs de rancune envers ceux qui ont cru. Notre Seigneur, Tu es Compatissant et Miséricordieux. Notre Seigneur, ne dévie pas nos cœurs après que Tu nous as guidés ; accorde-nous Ta miséricorde. Tu es, certes, le Grand Donateur. Invoquez par le « Bismillāh », par les Sept Répétées (la Fātiḥa), par le Verset du Trône aux profondes significations, et par la sourate Al-Ikhlāṣ, celle de la glorification. Heureux celui qui meurt dans l'unicité divine. Celui qui invoque par ces formules avec certitude voit son vœu exaucé par le Très-Solide. Ô Toi qui exauces, ô Mujīb, ô Mujīb — accueille la prière de celui qui tremble, ô Proche. Nous Te demandons la soumission au décret, la patience et l'agrément face à l'épreuve. Par l'Élu, intercesseur de toute la création, affermis, mon Dieu, ma parole dans la vérité. La plus pure prière d'Allah et le salut sur celui à qui fut promis le Tasnīm. Sur sa famille, ses compagnons illustres, les Suivants, puis les saints. Ô notre Seigneur, ô Maître des deux mondes, préserve-nous, mon Dieu, du mal dans les deux demeures. Fais-nous mourir, ô Allah, sur la religion du Prophète et dans l'amour de notre cheikh, l'Imam bienfaisant. Āmīn. Exauce notre invocation, ne déçois pas, ô mon Maître, notre espérance. J'implore la sécurité au jour où nulle sécurité ne subsiste, sinon pour celui à qui notre Maître l'aura accordée. Qu'Allah honore quiconque sanctifie le Sceau des Prophètes par la « Jawharat al-Kamāl ». Qu'Allah illumine le visage et les affaires de quiconque a prié sur l'Intercesseur, le plus noble, par la « Ṣalāt al-Fātiḥ », celle qui est agréée. « Allah et Ses anges prient sur le Prophète. Ô vous qui croyez, priez sur lui et adressez-lui vos salutations ». « Gloire à ton Seigneur, le Seigneur de la puissance ! Il est au-dessus de ce qu'ils décrivent. Paix sur les Messagers ! Et louange à Allah, Seigneur des mondes ». Un repentir sincère pour quiconque a assisté ou entendu la prière sur le Prophète et la « Jawharat al-Kamāl ». Heureux celui qui a élevé le Nom majestueux espérant son pardon, puis a glorifié Allah, le Vivant, Celui qui subsiste par Lui-même, matin et soir.",
  enContent: "In houses [zawiya or mosque] which Allah has allowed to be raised and where His name is mentioned. There, He is glorified morning and evening. Praise be to Allah who guided us to this. We would never have been guided if Allah had not guided us. This is a gift, by the grace of Allah, that we offer to you, O Messenger of Allah, upon you be peace. O Allah, our Lord, accept this gift from us. You are the Hearing, the Knowing. Turn to us, for You are the One who accepts repentance, the Most Merciful. May Allah reward our master, our prophet and our lord Muhammad — may Allah the Most High pray upon him and salute him. May Allah be pleased with Sheikh Tijani, our intercessor to Him, remover of sorrows. And all those who cling to his hems — pour upon us, my God, the oceans of protection. And all those who asked us to pray for their good, as well as other believers, all without exception. Accept therefore, my God, O Most Merciful, our repentance, by grace, generosity, pleasure and nobility. Likewise our ancestors and our loved ones, as well as theirs: envelop them, Lord, with a generality full of wisdom. And those who have done us good as well as those we have wronged — O our Lord, O You of immense mercy. And all the invocations we make — accept them for them, O You who dispels worries. My Lord, forgive me and my parents and have mercy on them as they raised me when I was little. Our Lord, forgive us and our brothers who preceded us in faith; and do not put in our hearts resentment towards those who have believed. Our Lord, You are Compassionate and Merciful. Our Lord, do not divert our hearts after You have guided us; grant us mercy from You. You are indeed the Great Giver. Invoke by 'Bismillah', by the Seven Repeated [the Fatiha], by the Verse of the Throne of deep meanings, and by surah Al-Ikhlas, that of glorification. Happy is he who dies in divine unity. He who invokes by these formulas with certainty sees his wish granted by the Most Steadfast. O You who answer, O Mujib, O Mujib — accept the prayer of the one who trembles, O Near. We ask You for submission to the decree, patience and acceptance during trials. By the Chosen One, intercessor of all creation, establish, my God, my word in truth. The purest prayer of Allah and peace upon him who was promised the Tasnim. Upon his family, his illustrious companions, the Followers, then the saints. O our Lord, O Master of the two worlds, preserve us, my God, from evil in both dwellings. Make us die, O Allah, on the religion of the Prophet and in the love of our sheikh, the beneficial Imam. Amen. Answer our invocation, do not disappoint, O my Master, our hope. I seek security on the day when no security remains, except for those whom our Master has granted it. May Allah honor whoever sanctifies the Seal of the Prophets with the 'Jawharat al-Kamal'. May Allah illuminate the face and affairs of whoever prayed upon the Intercessor, the most noble, with the 'Salat al-Fatih', the accepted one. 'Allah and His angels pray upon the Prophet. O you who believe, pray upon him and send your greetings'. 'Glory be to your Lord, the Lord of power! He is above what they describe. Peace be upon the Messengers! And praise be to Allah, Lord of the worlds'. Sincere repentance for whoever attended or heard the prayer upon the Prophet and the 'Jawharat al-Kamal'. Happy is he who raised the majestic Name hoping for forgiveness, then glorified Allah, the Living, the Self-Subsisting, morning and evening.",
  msContent: "Di dalam rumah-rumah (zawiya atau mosque) yang Allah izinkan untuk dinaikkan dan di mana namaNya disebut. Di sana, Dia dimuliakan pagi dan petang. Segala puji bagi Allah yang menunjukkan kami kepada ini. Kami tidak akan mendapat hidayah sekiranya Allah tidak menunjukkan kami. Ini adalah kurnia, dengan kurnia Allah, yang kami tawarkan kepada kamu, wahai Utusan Allah, atasmu kesejahteraan. Wahai Allah, Tuhan kami, terimalah ini dari kami. Engkau Maha Mendengar, Maha Mengetahui. Kembali kepada kami, kerana Engkau Penerima Taubat, Maha Penyayang. Moga Allah memberikan ganjaran kepada tuan kami, nabi dan pemerintah kami Muhammad — moga Allah Taala berselawat ke atasnya dan mengucapkan salam. Moga Allah redha dengan Sheikh Tijani, pemberi syafaat kami kepadaNya, penyingkir kesusahan. Dan semua yang berpegang pada jubahnya — tumpahkan ke atas kami, ya Allah saya, lautan perlindungan. Dan semua yang meminta kami mendoakan kebaikan mereka, serta orang-orang beriman yang lain, semua tanpa pengecualian. Terimalah, ya Allah saya, ya Maha Penyayang, taubat kami, dengan kurnia, kemurahan, redha dan kemuliaan. Demikian juga keluarga dan sahabat kami: selimuti mereka, Ya Tuhan, dengan keluasan penuh hikmah. Dan mereka yang telah membuat baik kepada kami seperti mereka yang kami aniaya — wahai Tuhan kami, wahai Engkau yang rahmatnya sangat luas. Dan semua doa yang kami lakukan — terimalah untuk mereka, wahai Engkau yang menghilangkan beban. Tuhanku, ampunilah aku dan ibu bapa saya dan merahmati mereka sebagaimana mereka membesarkan saya ketika kecil. Tuhan kami, ampunilah kami dan saudara-saudara kami yang mendahului kami dalam Iman; dan jangan letakkan dalam hati kami kebencian terhadap mereka yang beriman. Tuhan kami, Engkau Penyayang dan Maha Penyayang. Tuhan kami, jangan memalingkan hati kami selepas Engkau menunjukkan kami; berikan kami rahmat dari Engkau. Engkau benar-benar Pemberi yang Agung. Berdoalah dengan 'Bismillah', dengan Tujuh Ulang (Al-Fatihah), dengan Ayat Kursi yang bermakna mendalam, dan dengan surah Al-Ikhlas, yang memuliakan. Berbahagilah mereka yang mati dalam ketauhidan. Sesiapa yang berdoa dengan formula ini dengan yakin akan melihat permintaannya dipenuhi oleh Yang Maha Teguh. Wahai Engkau yang mengabulkan, wahai Mujib — terimalah doa orang yang gentar, wahai Yang Dekat. Kami memohon kepada-Mu ketundukan kepada qada, kesabaran dan redha dalam ujian. Dengan Yang Terpilih, pemberi syafaat seluruh creation, teguhkan, ya Allah saya, perkataan saya dengan kebenaran. Doa yang paling murni Allah dan kesejahteraan ke atas dia yang dijanji Tasnim. Ke atas keluarganya, para sahabatnya yang masyhur, pengikut-pengikut, kemudian para wali. Wahai Tuhan kami, wahai Tuhan kedua dunia, peliharakan kami, ya Allah saya, dari kejahatan di kedua-dua tempat. Jadikan kami mati, ya Allah, atas agama Nabi dan dalam cinta sheikh kami, Imam yang baik. Amin. Kabulkan doa kami, jangan sia-siakan, wahai Tuan saya, harapan saya. Saya memohon keselamatan pada hari tiada keselamatan melainkan bagi mereka yang Tuhan kami berikan keselamatan. Moga Allah memuliakan sesiapa yang menyucikan Penutup Para Nabi dengan 'Jawharat al-Kamal'. Moga Allah menerangi wajah dan urusan sesiapa yang berselawat kepada Pemberi Syafaat, yang paling mulianya, dengan 'Salat al-Fatih', yang diterima. 'Allah dan malaikat-NYA berselawat ke atas Nabi. Wahai kamu yang beriman, berselawatlah ke atasnya dan ucapkanlah salam'. 'Maha Suci Tuhan kamu, Tuhan kekuasaan! Dia di atas apa yang mereka jelaskan. Salam ke atas para Rasul! Dan puji bagi Allah, Tuhan sekalian alam'. Taubat yang ikhlas untuk sesiapa yang menghadiri atau mendengar selawat ke atas Nabi dan 'Jawharat al-Kamal'. Berbahagiah sesiapa yang meninggikan Nama Yang Mulia mengharapkan pengampunan, kemudian menyucikan Allah, Yang Hidup, Yang Wujudsendiri, pagi dan petang.",
  esContent: "En casas (zawiya o mezquita) que Allah ha permitido elevar y donde Su nombre es mencionado. Allí, Él es glorificado mañana y tarde. Alabado sea Allah quien nos guió a esto. Nunca habríamos sido guiados si Allah no nos hubiera guiado. Este es un regalo, por la gracia de Allah, que te ofrecemos, Oh Mensajero de Allah, sobre ti sea la paz. Oh Allah, nuestro Señor, acepta esto de nosotros. Tú eres el Que Oye, el Que Sabe. Vuélvenos a Ti, porque Tú eres el que acepta el arrepentimiento, el Más Misericordioso. Que Allah recompense a nuestro maestro, nuestro profeta y nuestro señor Muhammad — que Allah el Altísimo rece sobre él y lo salude. Que Allah se complazca con el Cheikh Tijani, nuestro intercesor ante Él, dissipateur des soucis. Y todos los que se aferran a sus haldas — derrama sobre nosotros, mi Dios, los océanos de la protección. Y todos los que nos pidieron que oráramos por su bien, así como los demás creyentes, todos sin excepción. Acepta entonces, mi Dios, Oh Todo-Misericordioso, nuestro arrepentimiento, por la gracia, la generosidad, la complacencia y la nobleza. Asimismo nuestros antepasados y nuestros queridos, así como los suyos: envuélvelos, Señor, con una generalidad llena de sabiduría. Y los que nos han hecho bien como aquellos a quienes hemos agraviado — Oh nuestro Señor, Oh Tú de inmensa misericordia. Y todas las invocaciones que hacemos — acéptalas por ellos, Oh Tú que disipas las preocupaciones. Mi Señor, perdona mí y a mis padres y ten misericordia de ellos como me criaron cuando era pequeño. Señor nuestro, perdona nosotros, así como a nuestros hermanos que nos precedieron en la fe; y no pongas en nuestros corazones rencor hacia quienes han creído. Señor nuestro, Tú eres Compasivo y Misericordioso. Señor nuestro, no desvíes nuestros corazones después de que nos hayas guiado; concédenos Tu misericordia. Tú eres, verdaderamente, el Gran Donador. Invocad con 'Bismillāh', por las Siete Repetidas (la Fātiḥa), por el Versículo del Trono de profundos significados, y por la sura Al-Ijlas, la de la glorificación. Feliz quien muere en la unicidad divina. Quien invoca por estas fórmulas con certeza ve su deseo concedido por el Muy Sólido. Oh Tú que atiendes, Oh Mujīb — acoge la oración del que tiembla, Oh Cercano. Te pedimos la sumisión al decreto, la paciencia y la aceptación ante la prueba. Por el Elegido, intercesor de toda la creación, fortalece, mi Dios, mi palabra en la verdad. La más pura oración de Allah y la paz sobre aquel a quien se le prometió el Tasnīm. Sobre su familia, sus ilustres compañeros, los Seguidores, luego los santos. Oh nuestro Señor, Oh Señor de los dos mundos, consérvanos, mi Dios, del mal en las dos moradas. Haznos morir, Oh Allah, en la religión del Profeta y en el amor de nuestro sheikh, el Imam benevolente. Amín. Escucha nuestra invocación, no defraudes, Oh mi Señor, nuestra esperanza. Imploro la seguridad el día en que no queda seguridad, sino para aquel a quien nuestro Señor la habrá concedido. Que Allah honre a quien santifica el Sello de los Profetas con la 'Jawharat al-Kamāl'. Que Allah ilumine el rostro y los asuntos de quien oró por el Intercesor, el más noble, con la 'Ṣalāt al-Fātiḥ', la aceptada. 'Allah y Sus ángeles oran sobre el Profeta. Oh vosotros que creéis, orad sobre él y dirigidle vuestros saludos'. 'Glorificado sea tu Señor, el Señor del poder! Él está por encima de lo que describen. Paz sobre los Mensajeros! Y alabado sea Allah, Señor de los mundos'. Arrepentimiento sincero para quien asistió u oír la oración sobre el Profeta y la 'Jawharat al-Kamāl'. Feliz quien elevó el Nombre majestuoso esperando su perdón, luego glorificó a Allah, el Viviente, el que Subsiste por Sí mismo, mañana y tarde.",
  trContent: "Allah'ın yükseltilmesine izin verdiği ve adının anıldığı evlerde [zaviye veya cami]. Orada O sabah ve akşam tesbih edilir. Bizi buna yönlendiren Allah'a hamd olsun. Allah bizi yönlendirmeseydi asla yönlendirilemezdik. Bu, Allah'ın lütfuyla, sana, ey Allah'ın Elçisi, sana selam olsun diye sunduğumuz bir hediyedir. Ey Allah, Rabbimiz, bunu bizden kabul et. Sen işiten, bilen sensin. Bize dön, çünkü tövbe kabul eden, en merhametli olan sensin. Efendimizi, peygamberimizi ve efendimiz Muhammed'i — Allah Teala ona selat ve selam eylesin — Allah mükafatlandırsın. Şeyh Ticani, kendisine vesile olan, sıkıntıları gideren aracımız, Allah ondan razı olsun. Eteklerine yapışanların hepsi — üzerimize, ilahım, koruma denizlerini dökmeleri için. Ve iyilikleri için dua etmemizi isteyenler ve diğer müminlerin hepsi, istisnasız. Kabul et, ilahım, ey Rahman, tövbemizi, lütuf, cömertlik, rıza ve kerem ile. Aynı şekilde atalarımız ve sevdiklerimiz: onları, ya Rabbi, hikmet dolu bir genellikle kuşat. Ve bize iyilik yapanlar ile bizim zarar verdiğimiz kimseler — ya rabbin, ya rabbi, ya Rahman'ın Rabbi. Yaptığımız tüm duaları — onlar için kabul et, ya kederi gideren. Rabbim, anne babamı affet ve onlara merhamet et, beni küçükken yetiştirdikleri gibi. Rabbimiz, bize ve imanda önümüzde geçen kardeşlerimize affet; kalplerimizde inananlara karşı kin kılma. Rabbimiz, şüphesiz Sen şefkatli ve merhametlisin. Rabbimiz, bizi yönlendirdikten sonra kalplerimizi saptırma; bize Rahmetini ver. Şüphesiz Sen büyük vericisin. 'Bismillah' ile, yedi tekrar ile [Fatiha], derin anlamlı Kürsi Ayeti ve tesbih olan Ihlas suresi ile dua edin. Teselli kimseyi öldüğünde mutludur. Bu formüllerle kesin olarak dua eden, isteğinin güçlü olan tarafından kabul edildiğini görür. Ey kabul eden, ey Mücib — titreyenin duasını kabul et, yakın olan. Senden kader'e teslimiyeti, sabrı ve belada rızayı istiyoruz. Seçilmiş olan, tüm yaratığın şefaatçisi, sözümü hakikatle sabitle, ilahım. Allah'ın en saf duası ve kendisine Tasnim vaat edilen üzerine selam. Ailesi, şanlı sahabeleri, Tabiinler ve veliler üzerine. Ya rabbin, ya iki alemin Rabbi, beni koru ilahım her iki makamda da şerden. Bizi, ya Allah, Peygamberin dini üzerinde ve şeyhimizin sevgisinde öldür. Amin. Duasını kabul et, boşa çıkarma, ya Rabbi, umudumuzu. Güvenliğin olmadığı günde, Rabbimizin güvenlik verdiği kimse hariç, güvenlik istiyorum. Allah, Peygamberlerin Mührünü 'Cevherat-ı Kemal' ile kutsayanı onurlandırsın. Allah, 'Salat-ı Fatiha' ile en şerefli Şefaatçi üzerine dua edenin yüzünü ve işlerini aydınlatsın. 'Allah ve melekleri Peygamber üzerine dua eder. Ey inananlar, ona dua edin ve selam gönderin'. 'Rabbin, Rabb-i Azim, yüce olan, yücedir. Onların tarif ettiği şeylerin üzerindedir. Elçilere selam! Ve alemlerin Rabbi olan Allah'a hamd olsun'. Peygamber üzerine dua ve 'Cevherat-ı Kemal'i duyan veya katılan için samimi tövbe. Sonra sabah ve akşam, affetmeyi umarak yüce İsmi yükselten ve diri, kendi kendine var olan Allah'ı tesbih eden mutlu kimsedir.",
  faContent: "در خانه‌ها (زاویه یا مسجد) که خداوند اجازه داده است بالا برده شود و نام او در آن یاد شود. او در آنجا صبح و شام تسبیح می‌شود. سپاس برای خداوندی که ما را به این هدایت کرد. اگر خداوند ما را هدایت نکرده بود، هرگز هدایت نمی‌شدیم. این هدیه‌ای است، به لطف خداوند، که ما به تو تقدیم می‌کنیم، ای فرستاده خدا، بر تو سلام. ای خدا، پروردگار ما، این را از ما بپذیر. تو شنوا و دانا هستی. به سوی ما بازگرد، زیرا تو توبه‌پذیر و مهربان‌ترین هستی. خداوند پاداش دهد به استاد ما، پیامبر ما و سرور ما محمد — خداوند تعالی بر او درود فرستد و سلامت بدهد. خداوند از شیخ تیجانی راضی باشد، واسطه ما به سوی او، رفع‌کننده غم‌ها. و همه کسانی که به دامان او چسبیده‌اند — بر ما، خدای من، دریاهای حفاظت را فرو بریز. و همه کسانی که از ما خواستند برای خیرشان دعا کنیم، و دیگر مؤمنان، همه بدون استثنا. بپذیر، خدای من، ای مهربان، توبه ما را، با لطف و سخا و رضا و کرامت. همچنین اجداد و دوستان ما: آنها را، پروردگار، در گسترشی پر از حکمت بپوشان. و کسانی که به ما نیکی کردند و کسانی که به آنها بدی کردیم — ای پروردگار ما، ای مهربان. و همه دعاهائی که می‌کنیم — برای آنها بپذیر، ای رفع‌کننده غم‌ها. پروردگارا، مرا و والدینم را ببخش و بر آنها رحم کن چنانکه مرا بزرگ کردند. پروردگارا، ما و برادرانمان که پیش از ما ایمان آوردند را ببخش؛ و در دل‌هایمان کینه مؤمنان قرار مده. پروردگارا، تو مهربان و رحیم هستی. پروردگارا، پس از هدایت‌مان، دل‌هایمان را منحرف مکن؛ و از جانب خود رحمتی به ما ببخش. تو راستی بخشنده بزرگ هستی. با «بسم‌الله»، با هفت تکرار [فاتحه]، با آیه کرسی معانی‌دار، و با سوره اخلاص که ستایش است، دعا کنید. خوشحال کسی که بر توحید می‌میرد. کسی که با این فرمول‌ها با یقین دعا کند، می‌بیند که خواسته‌اش پذیرفته می‌شود. ای اجابت‌کننده، ای مجیب — دعای ترسو را بپذیر، ای نزدیک. از تو می‌خواهیم تسلیم قضا، صبر و رضا در بلا را. با برگزیده، شفاعت‌کننده همه خلق، کلامم را با حق ثابت کن، خدای من. پاک‌ترین دعای خدا و سلام بر کسی که وعده تثمین داده شده. بر خانواده‌اش، صحابه بزرگوار، تابعین و اولیا. ای پروردگار ما، پروردگار دو جهان، مرا حفظ کن، خدای من، از شر هر دو عالم. ما را بمیران، خدا، بر دین پیامبر و در محبت شیخ ما، Imam نیک. آمین. دعایم را بپذیر، ناامید مکن، ای سرورم، امیدوارم. در روزی که امنیت نیست مگر برای کسانی که خداوند به آنها امنیت داده، امنیت می‌خواهم. خداوند کسی که پیامبران را با «جواهر کمال» مقدس می‌کند، گرامی دارد. خداوند روشن کند صورت و کار کسی که بر شفاعت‌کننده، با «صلاة فاتحه» دعا می‌کند. «خدا و فرشتگانش بر پیامبر درود می‌فرستند. ای مؤمنان، بر او درود فرستید و سلام بگویید». «پاک است پروردگار شما، پروردگار قدرت. او برتر از چیزی است که توصیف می‌کنند. سلام بر فرستاده‌ها! و سپاس برای خداوند، پروردگار جهانیان». توبه صادقانه برای کسی که درود بر پیامبر و «جواهر کمال» را می‌شنود یا شرکت می‌کند. سپس صبح و شام، کسی که نام بلند را برای آمرزش بالا می‌برد و خداوند زنده و قائم به ذات را تسبیح می‌کند، خوشحال است.",
  total: 1,
  transcription: "Fi buyutin adhin Allah an turfa wa yudhkar fiha smuhu yusabbihu lahu fiha bi al-ghudu wa al-asal",
  audioUrl: null,
  tasbihId: 1,
  numOrder: 999,
};

// Wird Lazim (tasbih_id = 2 & 3 combined as "Wird") - with final prayer
const wirdLitanies: Litany[] = [
  {
    id: 5,
    arName: 'دعاء الإفتتاح',
    enName: 'Opening Prayer',
    frName: 'Prière d\'ouverture',
    arContent: 'للَّهُمَّ إِنِّي نَوَيْتُ تِلَاوَةَ هَذَا الْوِرْدِ تَعْظِيمًا وَإِجْلَالًا لَكَ وَابْتِغَاءَ مَرْضَاتِكَ وَ قَصْدًا لِوَجْهِكَ الْكَرِيمِ، مُخْلِصًا لَكَ مِنْ أَجْلِكَ وَ أَقُولُ بِإِمْدَادِكَ وَ عَوْنِكَ وَحَوْلِكَ وَ قُوَّتِكَ، وَ مَا وَهَبْتَنِي مِنْ إِنْعَامِكَ وَ تَوْفِيقِكَ مُسْتَعِينًا بِكَ',
    frContent: "Ô Allah, je compte réciter cette litanie en Ta glorification et Ta vénération, en recherchant Ton agrément et en visant Ta noble Face. Je le fais sincèrement pour Toi et par amour pour Toi. Je parle grâce à Ton soutien, Ton aide, Ta puissance et Ta force. Et je compte sur ce que Tu m'as accordé comme faveurs et succès, en recherchant Ton assistance.",
    enContent: "O Allah, I intend to recite this litany in Your glorification and veneration, seeking Your pleasure and aiming at Your noble Face. I do it sincerely for You and out of love for You. I speak thanks to Your support, Your help, Your power and Your strength. And I rely on what You have granted me of favors and success, seeking Your assistance.",
    msContent: "Wahai Allah, aku berazam untuk membaca wirid ini sebagai pengagungan dan penghayatan kepada-Mu, mencari keredaan-Mu dan bertujuan kepada wajah-Mu yang mulia. Aku lakukan dengan ikhlas untuk-Mu dan kerana-Mu. Aku bercakap dengan pertolongan-Mu, bantuan-Mu, kekuasaan-Mu dan kekuatan-Mu. Dan aku bergantung kepada apa yang Engkau berikan kepadaku sebagai nikmat dan taufiq-Mu, memohon bantuan-Mu.",
    esContent: "Oh Allah, tengo la intención de recitar esta letanía en Tu glorificación y veneración, buscando Tu agrado y mirando Tu noble Rostro. Lo hago sinceramente por Ti y por amor a Ti. Hablo gracias a Tu apoyo, Tu ayuda, Tu poder y Tu fuerza. Y confío en lo que me has otorgado como favores y éxito, buscando Tu asistencia.",
    trContent: "Ey Allah, bu zikri senin yüceliğin ve senin saygın yüzünü arayarak, senin rızanı dileyerek okumayı niyet ediyorum. Seni severek ve senin için samimi olarak yapıyorum. Senin desteğin, yardımın, gücün ve kuvvetin sayesinde konuşuyorum. Ve bana lütfettiğin nimetlere ve başarıya güveniyorum, senin yardımını dileyerek.",
    faContent: "ای خداوند، من قصد دارم این ذکر را به خاطر بزرگداشت و تجلیل تو، با جستجوی رضایت تو و با هدف رویدادن به وجه شریف تو بخوانم. این را از صمیم قلب برای تو و به خاطر تو انجام می‌دهم. به لطف یاری و کمک و قدرت و نیروی تو سخن می‌گویم. و به آنچه از نعمت‌ها و توفیق‌ها به من داده‌ای، با توکل بر تو امیدوارم.",
    total: 1,
    transcription: "Allāhumma innī nawaytu tilāwata hādhā l-wird taʿẓīman wa ijlālan laka wabtighāʾa marḍātika wa qaṣdan li-wajhika l-karīm, mukhliṣan laka min ajlika wa aqūlu bi-imdādika wa ʿawnika wa ḥawlika wa quwwatika, wa mā wahabtani min inʿāmika wa tawfīqika mustaʿīnan bika.",
    audioUrl: null,
    tasbihId: 2,
    numOrder: 1,
  },
  {
    id: 1,
    arName: 'فاتحة الكتاب',
    enName: 'Opening of the book',
    frName: 'Prologue',
    arContent: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (1) ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (2) ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (3) مَٰلِكِ يَوۡمِ ٱلدِّينِ (4) إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ (5) ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ (6) صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ (7)',
    frContent: "1. Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. 2. Louange à Allah, Seigneur de l'univers. 3. Le Tout Miséricordieux, le Très Miséricordieux, 4. Maître du Jour de la rétribution. 5. C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours. 6. Guide-nous dans le droit chemin, 7. le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés",
    enContent: "In the name of God, the Most Gracious, the Most Merciful. (1) All praise is due to God, Lord of the worlds. (2) The Most Gracious, the Most Merciful. (3) Master of the Day of Judgment. (4) You alone do we worship, and You alone do we ask for help. (5) Guide us to the straight path. (6) The path of those upon whom You have bestowed favor, except for (7) Those who incur wrath, nor those who go astray.",
    msContent: "Dengan nama Allah Yang Maha Pemurah lagi Maha Mengasihani. (1) Segala puji bagi Allah, Tuhan semesta alam. (2) Yang Maha Pemurah lagi Maha Mengasihani. (3) Yang Menguasai hari pembalasan. (4) Engkaulah yang kami sembah dan kepada Engkaulah kami memohon pertolongan. (5) Tunjukkan kami ke jalan yang lurus. (6) Jalan mereka yang telah Engkau anugerahi nikmat, bukan (jalan) mereka yang mendapat kemarahan dan bukan pula mereka yang sesat.",
    esContent: "En el nombre de Allah, el Clemente, el Misericordioso. (1) Alabado sea Allah, Señor de los mundos. (2) El Clemente, el Misericordioso. (3) Rey del Día del Juicio. (4) A Ti adoramos y a Ti pedimos ayuda. (5) Guíanos por el camino recto. (6) El camino de quienes has agraciado, no el de los que incurren en Tu ira ni el de los extraviados.",
    trContent: "Rahman ve Rahim olan Allah'ın adıyla. (1) Hamd, alemlerin Rabbi olan Allah'a mahsustur. (2) O, Rahman ve Rahim'dir. (3) Kıyamet gününün sahibidir. (4) Sana kulluk ederiz ve senden yardım isteriz. (5) Bizi doğru yola ilet. (6) Nimet verdiğinlerin yoluna, gazaba uğrayanların ve sapkınların değil.",
    total: 1,
    transcription: "Bismi-llāhi r-raḥmāni r-raḥīm (1) Al-ḥamdu li-llāhi Rabbi l-ʿālamīn (2) Ar-raḥmāni r-raḥīm (3) Māliki yawmi d-dīn (4) Iyyāka naʿbudu wa iyyāka nastaʿīn (5) Ihdinā ṣ-ṣirāta l-mustaqīm (6) Ṣirāta lladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa lā ḍ-ḍāllīn",
    audioUrl: null,
    tasbihId: 2,
    numOrder: 2,
  },
  {
    id: 6,
    arName: 'أستغفر الله',
    enName: 'I ask God for forgiveness',
    frName: 'Je demande pardon à Allah',
    arContent: 'أستغفر الله',
    frContent: 'Je demande pardon à Allah',
    enContent: 'I ask God for forgiveness',
    msContent: 'Aku memohon pengampunan kepada Allah',
    esContent: 'Pido perdón a Allah',
    trContent: 'Allah\'tan af diliyorum',
    faContent: 'از خداوند آمرزش می‌خواهم',
    total: 100,
    transcription: 'Astaghfirullah',
    audioUrl: null,
    tasbihId: 2,
    numOrder: 3,
  },
  {
    id: 7,
    arName: 'صلاة الفاتحة',
    enName: 'Salat al-Fatihi',
    frName: 'La Prière de l\'Ouvreur',
    arContent: 'اللَّهُمَّ صَلِّ عَلى سَيِّدِنَا مُحَمَّدٍ، الفاتِحِ لِمَا أُغْلِقَ والخاتِمِ لِمَا سَبَقَ، نَاصِرِ الحَقِّ بِالحَقِّ والهَادِي إلى صِرَاطِكَ المُسْتَقِيمِ، وعَلَى آلِهِ حَقَّ قَدْرِهِ ومِقْدَارِهِ العَظِيمِ',
    frContent: "Ô Allah, répands Tes bénédictions sur notre maître Muhammad, celui qui ouvre ce qui était fermé, qui scelle ce qui a précédé, le défendeur de la vérité par la vérité, et le guide vers Ton droit chemin. Et (répands Tes bénédictions) sur sa famille selon la vraie mesure de sa valeur et de son immense stature",
    enContent: "O Allah, bestow Your blessings upon our master Muhammad, the one who opens what was closed, who seals what came before, the defender of truth with truth, and guides him to Your straight path. And (bestow Your blessings) upon his family according to the true measure of his worth and his immense stature.",
    msContent: "Wahai Allah, curahkanlah keberkatan ke atas tuan kami Muhammad, pembuka apa yang tertutup, penutup apa yang telah lalu, pembela kebenaran dengan kebenaran dan panduan ke jalan-Mu yang lurus, dan ke atas keluarganya menurutlah hak nilai dan darjatnya yang besar",
    esContent: "Oh Allah, derrama Tus bendiciones sobre nuestro maestro Muhammad, el que abre lo que estaba cerrado, el que sella lo que precede, el defensor de la verdad con la verdad, y la guía hacia Tu recto camino. Y (derrama Tus bendiciones) sobre su familia según la verdadera medida de su valor y su inmensa estatura.",
    trContent: "Ey Allah, açılmış olanın açanı, geçmişin mührü olan efendimiz Muhammad'a, hakikatle hakkın savunucusuna ve doğru yoluna rehber olan selat ver. Ve değeri ve büyük makamı nispetinde ailesine de öyle yap",
    total: 100,
    transcription: "Allāhumma ṣalli ʿalā sayyidinā Muḥammad, al-fātiḥi limā ughliqa wal-khātimi limā sabaqa, nāṣiri l-ḥaqqi bil-ḥaqqi wal-hādī ilā ṣirāṭika l-mustaqīm, wa ʿalā ālihi ḥaqqa qadrihi wa miqdārihi l-ʿaẓīm.",
    audioUrl: null,
    tasbihId: 2,
    numOrder: 5,
  },
  {
    id: 8,
    arName: 'لا اله إلا الله',
    enName: 'There is no god but Allah',
    frName: "Il n'y a de dieu qu'Allah",
    arContent: 'لا اله إلا الله',
    frContent: "Il n'y a de dieu qu'Allah",
    enContent: 'There is no god but Allah',
    msContent: 'Tiada tuhan melainkan Allah',
    esContent: 'No hay más dios que Allah',
    trContent: 'Allah\'tan başka ilah yoktur',
    total: 100,
    transcription: 'Lā ilāha illā Allāh.',
    audioUrl: null,
    tasbihId: 2,
    numOrder: 7,
  },
  finalPrayer,
];

// Lazim (tasbih_id = 3) - with final prayer
const lazimLitanies: Litany[] = [
  {
    id: 12,
    arName: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ',
    enName: 'I seek forgiveness from Allah, the Most Great',
    frName: 'Je demande pardon à Allah, le Très Grand',
    arContent: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
    frContent: "Je demande pardon à Allah, le Très Grand, en dehors duquel il n'y a point de divinité, le Vivant, Celui qui subsiste par Lui-même",
    enContent: "I seek forgiveness from Allah, the Most Great, besides whom there is no deity, the Living, the Sustainer.",
    msContent: "Aku memohon pengampunan kepada Allah Yang Maha Besar, yang tiada tuhan melainkan Dia, Yang Maha Hidup, Yang Maha Berdiri sendiri",
    esContent: "Pido perdón a Allah el Grande, außer dem cual no hay más divinidad, el Viviente, el que Subsiste por Sí mismo",
    trContent: "Ben, kendisinden başka ilah olmayan, diri olan, kendi kendine var olan Allah'tan, en büyük olanından af diliyorum",
    total: 30,
    transcription: "Astaghfirullah al-'Azim alladhi la ilaha illa Huwa al-Hayy al-Qayyum.",
    audioUrl: null,
    tasbihId: 3,
    numOrder: 3,
  },
  {
    id: 14,
    arName: 'صلاة الفاتحة',
    enName: 'Salat al-Fatihi',
    frName: 'La Prière de l\'Ouvreur',
    arContent: 'اللَّهُمَّ صَلِّ عَلى سَيِّدِنَا مُحَمَّدٍ، الفاتِحِ لِمَا أُغْلِقَ والخاتِمِ لِمَا سَبَقَ، نَاصِرِ الحَقِّ بِالحَقِّ والهَادِي إلى صِرَاطِكَ المُسْتَقِيمِ، وعَلَى آلِهِ حَقَّ قَدْرِهِ ومِقْدَارِهِ العَظِيمِ',
    frContent: "Ô Allah, répands Tes bénédictions sur notre maître Muhammad, celui qui ouvre ce qui était fermé, qui scelle ce qui a précédé, le défendeur de la vérité par la vérité, et le guide vers Ton droit chemin. Et (répands Tes bénédictions) sur sa famille selon la vraie mesure de sa valeur et de son immense stature",
    enContent: "O Allah, send Your blessings upon our master Muhammad, the opener of what was closed, the seal of what came before, the defender of the truth with the truth, and the guide to Your straight path. And (send Your blessings) upon his family according to the true measure of his value and immense stature.",
    msContent: "Wahai Allah, curahkanlah keberkatan ke atas tuan kami Muhammad, pembuka apa yang tertutup, penutup apa yang telah lalu, pembela kebenaran dengan kebenaran dan panduan ke jalan-Mu yang lurus, dan ke atas keluarganya menurutlah hak nilai dan darjatnya yang besar",
    esContent: "Oh Allah, derrama Tus bendiciones sobre nuestro maestro Muhammad, el que abre lo que estaba cerrado, el que sella lo que precede, el defensor de la verdad con la verdad, y la guía hacia Tu recto camino. Y (derrama Tus bendiciones) sobre su familia según la verdadera medida de su valor y su inmensa estatura.",
    trContent: "Ey Allah, açılmış olanın açanı, geçmişin mührü olan efendimiz Muhammad'a, hakikatle hakkın savunucusuna ve doğru yoluna rehber olan selat ver. Ve değeri ve büyük makamı nispetinde ailesine de öyle yap",
    total: 50,
    transcription: "Allahumma salli 'ala sayidina Muhammad, al-Fatih lima ughliqa wa al-Khatim lima sabaqa, Nasir al-haqq bil-haqq wa al-hadi ila siratika al-mustaqim, wa 'ala alihi haqq qadrihi wa miqdarihi al-azim.",
    audioUrl: null,
    tasbihId: 3,
    numOrder: 5,
  },
  {
    id: 16,
    arName: 'لا اله إلا الله',
    enName: 'There is no god but Allah',
    frName: "Il n'y a de dieu qu'Allah",
    arContent: 'لا اله إلا الله',
    frContent: "Il n'y a de dieu qu'Allah",
    enContent: 'There is no god but Allah',
    msContent: 'Tiada tuhan melainkan Allah',
    esContent: 'No hay más dios que Allah',
    trContent: 'Allah\'tan başka ilah yoktur',
    total: 100,
    transcription: 'Lā ilāha illā Allāh.',
    audioUrl: null,
    tasbihId: 3,
    numOrder: 8,
  },
  finalPrayer,
];

// Wazifa (tasbih_id = 3) - with opening prayer, correct order, and final prayer
const wazifaLitanies: Litany[] = [
  {
    id: 11,
    arName: 'دعاء الإفتتاح',
    enName: 'Opening Prayer',
    frName: 'Priere douverture',
    arContent: 'للَّهُمَّ إِنِّي نَوَيْتُ تِلَاوَةَ هَذَا الْوِرْدِ تَعْظِيمًا وَإِجْلَالًا لَكَ وَابْتِغَاءَ مَرْضَاتِكَ وَقَصْدًا لِوَجْهِكَ الْكَرِيمِ، مُخْلِصًا لَكَ مِنْ أَجْلِكَ وَأَقُولُ بِإِمْدَادِكَ وَعَوْنِكَ وَحَوْلِكَ وَقُوَّتِكَ، وَمَا وَهَبْتَنِي مِنْ إِنْعَامِكَ وَتَوْفِيقِكَ مُسْتَعِينًا بِكَ',
    frContent: "Ô Allah, je compte réciter cette litanie en Ta glorification et Ta vénération, en recherchant Ton agrément et en visant Ta noble Face. Je le fais sincèrement pour Toi et par amour pour Toi. Je parle grâce à Ton soutien, Ton aide, Ta puissance et Ta force. Et je compte sur ce que Tu m'as accordé comme faveurs et succès, en recherchant Ton assistance.",
    enContent: "O Allah, I intend to recite this litany in Your glorification and veneration, seeking Your pleasure and aiming at Your noble Face. I do it sincerely for You and out of love for You. I speak thanks to Your support, Your help, Your power and Your strength. And I rely on what You have granted me of favors and success, seeking Your assistance.",
    msContent: "Wahai Allah, aku berazam untuk membaca wirid ini sebagai pengagungan dan penghayatan kepada-Mu, mencari keredaan-Mu dan bertujuan kepada wajah-Mu yang mulia. Aku lakukan dengan ikhlas untuk-Mu dan kerana-Mu. Aku bercakap dengan pertolongan-Mu, bantuan-Mu, kekuasaan-Mu dan kekuatan-Mu. Dan aku bergantung kepada apa yang Engkau berikan kepadaku sebagai nikmat dan taufiq-Mu, memohon bantuan-Mu.",
    esContent: "Oh Allah, tengo la intención de recitar esta letanía en Tu glorificación y veneración, buscando Tu agrado y mirando Tu noble Rostro. Lo hago sinceramente por Ti y por amor a Ti. Hablo gracias a Tu apoyo, Tu ayuda, Tu poder y Tu fuerza. Y confío en lo que me has otorgado como favores y éxito, buscando Tu asistencia.",
    trContent: "Ey Allah, bu zikri senin yüceliğin ve senin saygın yüzünü arayarak, senin rızanı dileyerek okumayı niyet ediyorum. Seni severek ve senin için samimi olarak yapıyorum. Senin desteğin, yardımın, gücün ve kuvvetin sayesinde konuşuyorum. Ve bana lütfettiğin nimetlere ve başarıya güveniyorum, senin yardımını dileyerek.",
    total: 1,
    transcription: "Allāhumma innī nawaytu tilāwata hādhā l-wird taʿẓīman wa ijlālan laka wabtighāʾa marḍātika wa qaṣdan li-wajhika l-karīm, mukhliṣan laka min ajlika wa aqūlu bi-imdādika wa ʿawnika wa ḥawlika wa quwwatika, wa mā wahabtani min inʿāmika wa tawfīqika mustaʿīnan bika.",
    audioUrl: null,
    tasbihId: 3,
    numOrder: 0,
  },
  {
    id: 12,
    arName: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ',
    enName: 'Istighfar',
    frName: 'Istighfar',
    arContent: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
    frContent: "Je demande pardon à Allah, le Très Grand, en dehors duquel il n'y a point de divinité, le Vivant, Celui qui subsiste par Lui-même",
    enContent: "I seek forgiveness from Allah, the Most Great, besides whom there is no deity, the Living, the Sustainer.",
    total: 30,
    transcription: "Astaghfirullah al-'Azim alladhi la ilaha illa Huwa al-Hayy al-Qayyum.",
    audioUrl: null,
    tasbihId: 3,
    numOrder: 1,
  },
  {
    id: 14,
    arName: 'صلاة الفاتحة',
    enName: 'Salat al-Fatihi',
    frName: 'Salat al-Fatihi',
    arContent: 'اللَّهُمَّ صَلِّ عَلى سَيِّدِنَا مُحَمَّدٍ، الفاتِحِ لِمَا أُغْلِقَ والخاتِمِ لِمَا سَبَقَ، نَاصِرِ الحَقِّ بِالحَقِّ والهَادِي إلى صِرَاطِكَ المُسْتَقِيمِ، وعَلَى آلِهِ حَقَّ قَدْرِهِ ومِقْدَارِهِ العَظِيمِ',
    frContent: "Ô Allah, répands Tes bénédictions sur notre maître Muhammad, celui qui ouvre ce qui était fermé, qui scelle ce qui a précédé, le défendeur de la vérité par la vérité, et le guide vers Ton droit chemin.",
    enContent: "O Allah, send Your blessings upon our master Muhammad, the opener of what was closed, the seal of what came before, the defender of the truth with the truth, and the guide to Your straight path.",
    msContent: "Wahai Allah, curahkanlah keberkatan dan salam ke atas tuan kami Muhammad, pembuka apa yang tertutup, penutup apa yang telah lalu, pembela kebenaran dengan kebenaran dan panduan ke jalan-Mu yang lurus, dan ke atas keluarganya menurutlah hak nilai dan darjatnya yang besar",
    esContent: "Oh Allah, derrama Tus bendiciones sobre nuestro maestro Muhammad, el que abre lo que estaba cerrado, el que sella lo que precede, el defensor de la verdad con la verdad, y la guía hacia Tu recto camino.",
    trContent: "Ey Allah, açılmış olanın açanı, geçmişin mührü olan efendimiz Muhammad'a, hakikatle hakkın savunucusuna ve doğru yoluna rehber olan selat ve selam ver. Ve değeri ve büyük makamı nispetinde ailesine de öyle yap",
    total: 50,
    transcription: "Allahumma salli 'ala sayidina Muhammad, al-Fatih lima ughliqa wa al-Khatim lima sabaqa, Nasir al-haqq bil-haqq wa al-hadi ila siratika al-mustaqim, wa 'ala alihi haqq qadrihi wa miqdarihi al-azim.",
    audioUrl: null,
    tasbihId: 3,
    numOrder: 2,
  },
  {
    id: 16,
    arName: 'لا اله إلا الله',
    enName: 'La ilaha illa Allah',
    frName: 'La ilaha illa Allah',
    arContent: 'لا اله إلا الله',
    frContent: "Il n'y a de dieu qu'Allah",
    enContent: 'There is no god but Allah',
    msContent: 'Tiada tuhan melainkan Allah',
    esContent: 'No hay más dios que Allah',
    trContent: 'Allah\'tan başka ilah yoktur',
    total: 100,
    transcription: 'Lā ilāha illā Allāh.',
    audioUrl: null,
    tasbihId: 3,
    numOrder: 3,
  },
  {
    id: 18,
    arName: 'جوهرة الكمال',
    enName: 'The Jewel of Perfection',
    frName: 'La Perle de la Perfection',
    arContent: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى عَيْنِ الرَّحْمَةِ الرَّبَّانِيَّةِ وَالْيَاقُوتَةِ الْمُتَحَقِّقَةِ الْحَائِطَةِ بِمَرْكَزِ الْفُهُومِ وَالْمَعَانِي وَنُورِ الْأَكْوَانِ الْمُتَكَوِّنَةِ الْآدَمِيِّ صَاحِبِ الْحَقِّ الرَّبَّانِيِّ الْبَرْقِ الْأَسْطَعِ بِمُزُونِ الْأَرْبَاحِ الْمَالِئَةِ لِكُلِّ مُتَعَرِّضٍ مِنَ الْبُحُورِ وَالْأَوَانِي وَنُورِكَ اللَّامِعِ الَّذِي مَلَأْتَ بِهِ كَوْنَكَ الْحَائِطَ بِأَمْكِنَةِ الْمَكَانِيِّ اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى عَيْنِ الْحَقِّ الَّتِي تَتَجَلَّى مِنْهَا عُرُوشُ الْحَقَائِقِ عَيْنِ الْمَعَارِفِ الْأَقْوَمِ صِرَاطِكَ التَّامِّ الْأَسْقَمِ اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى طَلْعَةِ الْحَقِّ بِالْحَقِّ الْكَنْزِ الْأَعْظَمِ إِفَاضَتِكَ مِنْكَ إِلَيْكَ إِحَاطَةَ النُّورِ الْمُطَلْسَمِ صَلَّى اللهُ عَلَيْهِ وَعَلَى آلِهِ صَلَاةً تُعَرِّفُنَا بِهَا إِيَّاهُ',
    frContent: "Ô Seigneur, répands Ta grâce et Ta paix sur l'Essence de la Miséricorde Divine, Le Joyau sublime qui entoure le centre des compréhensions et des significations, La Lumière des univers créés, l'Humain, Le Détenteur de la Vérité Divine, l'Éclair le plus brillant, Avec les nuages de profits qui remplissent tous ceux qui s'y exposent parmi les mers et les récipients, Et Ta Lumière resplendissante avec laquelle Tu as rempli Ton univers qui entoure les lieux de l'espace.",
    enContent: "O Allah, send Your blessings and peace upon the eye of Divine Mercy, the precious ruby that confirms and encompasses the center of understanding and meanings, and the light of the created beings, the Adamic one, the bearer of the Divine Truth, the brightest lightning amidst the abundance of gains that fills every exposure from the seas and containers.",
    msContent: "Wahai Allah, curahkanlah keberkatan dan keselamatan ke atas Mata Rahmat Ilahi, permata ruby yang mengesahkan dan meliputi pusat pemahaman dan makna, dan cahaya makhluk yang dicipta, manusia, pembawa Kebenaran Ilahi, kilat yang paling terang di tengah-tengah keuntungan yang melimpah yang memenuhi setiap pendedahan dari laut dan bekas.",
    esContent: "Oh Allah, derrama Tus bendiciones y paz sobre el ojo de la Misericordia Divina, la ruby preciosa que confirma y abarca el centro del entendimiento y los significados, y la luz de los seres creados, el adánico, el portador de la Verdad Divina, el rayo más brillante en medio de la abundancia de ganancias que llena toda exposición de los mares y contenedores.",
    trContent: "Ey Allah, İlahi Merhametin gözü, anlama ve anlamların merkezini doğrulayan ve kapsayan değerli yakut, yaratılmış varlıkların ışığı, İlahi Gerçeğin taşıyıcısı, denizlerden ve kaplardan her türlü maruz kalma ile dolu bol kazanımlar arasında en parlak şimşek üzerine ilahi bereket ve esenlik gönder",
    total: 12,
    transcription: "Allahumma salli wa sallim 'ala 'ayn al-rahmah al-rabbaniyyah wa al-yaqutah al-mutahaqqiqah al-ha'itah bimarkaz al-fuhum wa al-ma'ani...",
    audioUrl: null,
    tasbihId: 3,
    numOrder: 4,
  },
  finalPrayer,
];

// Haylala / Hadratoul Juma (tasbih_id = 4) - with opening prayer and final prayer
const haylalaLitanies: Litany[] = [
  {
    id: 11,
    arName: 'دعاء الإفتتاح',
    enName: 'Opening Prayer',
    frName: 'Prière d\'ouverture',
    arContent: 'للَّهُمَّ إِنِّي نَوَيْتُ تِلَاوَةَ هَذَا الْوِرْدِ تَعْظِيمًا وَإِجْلَالًا لَكَ وَابْتِغَاءَ مَرْضَاتِكَ وَقَصْدًا لِوَجْهِكَ الْكَرِيمِ، مُخْلِصًا لَكَ مِنْ أَجْلِكَ وَأَقُولُ بِإِمْدَادِكَ وَعَوْنِكَ وَحَوْلِكَ وَقُوَّتِكَ، وَمَا وَهَبْتَنِي مِنْ إِنْعَامِكَ وَتَوْفِيقِكَ مُسْتَعِينًا بِكَ',
    frContent: "Ô Allah, je compte réciter cette litanie en Ta glorification et Ta vénération, en recherchant Ton agrément et en visant Ta noble Face. Je le fais sincèrement pour Toi et par amour pour Toi. Je parle grâce à Ton soutien, Ton aide, Ta puissance et Ta force. Et je compte sur ce que Tu m'as accordé comme faveurs et succès, en recherchant Ton assistance.",
    enContent: "O Allah, I intend to recite this litany in Your glorification and veneration, seeking Your pleasure and aiming at Your noble Face. I do it sincerely for You and out of love for You. I speak thanks to Your support, Your help, Your power and Your strength. And I rely on what You have granted me of favors and success, seeking Your assistance.",
    total: 1,
    transcription: "Allāhumma innī nawaytu tilāwata hādhā l-wird taʿẓīman wa ijlālan laka wabtighāʾa marḍātika wa qaṣdan li-wajhika l-karīm, mukhliṣan laka min ajlika wa aqūlu bi-imdādika wa ʿawnika wa ḥawlika wa quwwatika, wa mā wahabtani min inʿāmika wa tawfīqika mustaʿīnan bika.",
    audioUrl: null,
    tasbihId: 4,
    numOrder: 0,
  },
  {
    id: 22,
    arName: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ',
    enName: 'Istighfar',
    frName: 'Istighfar',
    arContent: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
    frContent: "Je demande pardon à Allah, le Très Grand, en dehors duquel il n'y a point de divinité, le Vivant, Celui qui subsiste par Lui-même",
    enContent: "I seek forgiveness from Allah, the Most Great, besides whom there is no deity, the Living, the Sustainer.",
    msContent: "Aku memohon pengampunan kepada Allah Yang Maha Besar, yang tiada tuhan melainkan Dia, Yang Maha Hidup, Yang Maha Berdiri sendiri",
    esContent: "Pido perdón a Allah el Grande, außer dem cual no hay más divinidad, el Viviente, el que Subsiste por Sí mismo",
    trContent: "Ben, kendisinden başka ilah olmayan, diri olan, kendi kendine var olan Allah'tan, en büyük olanından af diliyorum",
    total: 3,
    transcription: "Astaghfirullah al-'Azim alladhi la ilaha illa Huwa al-Hayy al-Qayyum.",
    audioUrl: null,
    tasbihId: 4,
    numOrder: 1,
  },
  {
    id: 23,
    arName: 'صلاة الفاتحة',
    enName: 'Salat al-Fatihi',
    frName: 'Salat al-Fatihi',
    arContent: 'اللَّهُمَّ صَلِّ عَلى سَيِّدِنَا مُحَمَّدٍ، الفاتِحِ لِمَا أُغْلِقَ والخاتِمِ لِمَا سَبَقَ، نَاصِرِ الحَقِّ بِالحَقِّ والهَادِي إلى صِرَاطِكَ المُسْتَقِيمِ، وعَلَى آلِهِ حَقَّ قَدْرِهِ ومِقْدَارِهِ العَظِيمِ',
    frContent: "Ô Allah, répands Tes bénédictions sur notre maître Muhammad, celui qui ouvre ce qui était fermé, qui scelle ce qui a précédé, le défendeur de la vérité par la vérité, et le guide vers Ton droit chemin.",
    enContent: "O Allah, bestow Your blessings upon our master Muhammad, the one who opens what was closed, who seals what came before, the defender of truth with truth.",
    msContent: "Wahai Allah, curahkanlah keberkatan ke atas tuan kami Muhammad, pembuka apa yang tertutup, penutup apa yang telah lalu, pembela kebenaran dengan kebenaran dan panduan ke jalan-Mu yang lurus",
    esContent: "Oh Allah, derrama Tus bendiciones sobre nuestro maestro Muhammad, el que abre lo que estaba cerrado, el que sella lo que precede, el defensor de la verdad con la verdad, y la guía hacia Tu recto camino.",
    trContent: "Ey Allah, açılmış olanın açanı, geçmişin mührü olan efendimiz Muhammad'a, hakikatle hakkın savunucusuna ve doğru yoluna rehber olan selat ver",
    total: 3,
    transcription: "Allāhumma ṣalli ʿalā sayyidinā Muḥammad, al-fātiḥi limā ughliqa wal-khātimi limā sabaqa...",
    audioUrl: null,
    tasbihId: 4,
    numOrder: 2,
  },
  {
    id: 25,
    arName: 'لا اله إلا الله',
    enName: 'There is no god but Allah',
    frName: "Il n'y a de dieu qu'Allah",
    arContent: 'لا اله إلا الله',
    frContent: "Il n'y a de dieu qu'Allah",
    enContent: 'There is no god but Allah',
    msContent: 'Tiada tuhan melainkan Allah',
    esContent: 'No hay más dios que Allah',
    trContent: 'Allah\'tan başka ilah yoktur',
    total: 1200,
    transcription: 'Lā ilāha illā Allāh.',
    audioUrl: null,
    tasbihId: 4,
    numOrder: 3,
  },
  finalPrayer,
];

// Litanies annexes - cleared (will be added later by superadmin)
const annexeLitanies: Litany[] = [];

export const wirdSections: WirdSection[] = [
  {
    id: 1,
    nameAr: 'الورد',
    nameFr: 'Laazim',
    nameEn: 'Laazim',
    descriptionAr: 'المساء والصباح • 100/100/100',
    descriptionFr: 'Matin et Soir • 100/100/100',
    descriptionEn: 'Morning and Evening • 100/100/100',
    descriptionMs: 'Pagi dan Petang • 100/100/100',
    descriptionEs: 'Mañana y Tarde • 100/100/100',
    descriptionTr: 'Sabah ve Akşam • 100/100/100',
    image: IMAGES.medinaGreen,
    color: 'from-emerald-600 to-teal-700',
    litanies: wirdLitanies,
  },
  {
    id: 2,
    nameAr: 'وظيفة',
    nameFr: 'Wazifa',
    nameEn: 'Wazifa',
    descriptionAr: 'اليومية • جوهر الكمال',
    descriptionFr: 'Quotidienne • Jawharat al-Kamal',
    descriptionEn: 'Daily • Jawharat al-Kamal',
    descriptionMs: 'Harian • Jawharat al-Kamal',
    descriptionEs: 'Diaria • Jawharat al-Kamal',
    descriptionTr: 'Günlük • Jawharat al-Kamal',
    image: IMAGES.nabawiSunrise,
    color: 'from-teal-600 to-cyan-700',
    litanies: wazifaLitanies,
  },
  {
    id: 3,
    nameAr: 'حضرة الجمعة',
    nameFr: 'Hadratoul Juma',
    nameEn: 'Hadratoul Juma',
    descriptionAr: 'عصر يوم الجمعة • 1200 حلية',
    descriptionFr: 'Asrou du Vendredi • 1200 Haylala',
    descriptionEn: 'Friday Session • 1200 Haylala',
    descriptionMs: 'Sesi Jumaat • 1200 Haylala',
    descriptionEs: 'Sesión del Viernes • 1200 Haylala',
    descriptionTr: 'Cuma Oturumu • 1200 Haylala',
    image: IMAGES.nabawi,
    color: 'from-cyan-600 to-blue-700',
    litanies: haylalaLitanies,
  },
  {
    id: 4,
    nameAr: 'أذكار و أدعية',
    nameFr: 'Litanies Annexes',
    nameEn: 'Additional Litanies',
    descriptionAr: 'صلاة الفاتحي، حزب البحر...',
    descriptionFr: 'Salat al-Fatihi, Hizb el Bahr...',
    descriptionEn: 'Salat al-Fatihi, Hizb el Bahr...',
    descriptionMs: 'Salat al-Fatihi, Hizb el Bahr...',
    descriptionEs: 'Salat al-Fatihi, Hizb el Bahr...',
    descriptionTr: 'Salat al-Fatihi, Hizb el Bahr...',
    descriptionFa: 'صلاة الفاتحة، حزب البحر...',
    image: IMAGES.quba,
    color: 'from-indigo-600 to-purple-700',
    litanies: annexeLitanies,
  },
];
