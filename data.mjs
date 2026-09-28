export const business = {
 name: 'Estética Aline Santos', phone: '5521992883982', displayPhone: '(21) 99288-3982',
 instagram: 'https://www.instagram.com/estetica.alinesantos/reels/', maps: 'https://maps.app.goo.gl/grVjHgXTWzzaKnUz7',
 embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.9820302226076!2d-42.1034459!3d-22.838265900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x970f608e6501ef%3A0x21cf468bc94e833f!2sAline%20Santos%20-%20Est%C3%A9tica%20Humanizada%20e%20Auriculoterapia!5e1!3m2!1spt-BR!2sbr!4v1790602081357!5m2!1spt-BR!2sbr',
 street: 'Av. Getúlio Vargas, 8 — sala 215', locality: 'Centro, São Pedro da Aldeia — RJ', postalCode: '28941-122', landmark: 'Em cima do Extra.',
 hours: [{label:'Segunda a sexta',time:'9h às 19h',days:['Monday','Tuesday','Wednesday','Thursday','Friday'],opens:'09:00',closes:'19:00'},{label:'Sábado',time:'9h às 13h',days:['Saturday'],opens:'09:00',closes:'13:00'}],
 title: 'Estética Aline Santos | Estética em São Pedro da Aldeia',
 description: 'Cuidados faciais e corporais, massagens e auriculoterapia em São Pedro da Aldeia. Conheça a Estética Aline Santos e agende pelo WhatsApp.',
 // Preencher somente quando o domínio público definitivo estiver confirmado.
 canonical: ''
};
export const mediaRoot = '/images/estetica-aline/';
export const media = {
 logo: {file:'logo-aline-transparente.png',width:291,height:273,alt:'Aline Santos — Estética Humanizada'},
 aline: {file:'aline-santos.webp',width:1080,height:1080,alt:'Aline Santos, esteticista, com uniforme verde no espaço de atendimento'},
 hero: {file:'hero-estetica-aline.webp',width:1536,height:1024,alt:'Cena ilustrativa de autocuidado: mulher adulta em um ambiente acolhedor'},
 facial: {file:'procedimento-facial.webp',width:1536,height:1024,alt:'Imagem ilustrativa de cuidado facial com as mãos apoiadas suavemente no rosto'},
 corporal: {file:'cuidado-corporal.webp',width:1536,height:1024,alt:'Imagem ilustrativa de cuidado corporal, com toalhas e enquadramento discreto'},
 relaxamento: {file:'massagem-relaxante.webp',width:1536,height:1024,alt:'Imagem ilustrativa de massagem relaxante nos ombros e nas costas'},
 bemestar: {file:'auriculoterapia.webp',width:1536,height:1024,alt:'Imagem ilustrativa de bem-estar: mulher de perfil em um momento de pausa'}
};
export const categories = [
 {id:'faciais',title:'Cuidados faciais',image:'facial',services:[{name:'Limpeza de pele'},{name:'Peeling orgânico'}]},
 {id:'corporais',title:'Cuidados corporais',image:'corporal',services:[{name:'Drenagem linfática'},{name:'Lipo Light',description:'Protocolo para gordura localizada que reúne ultrassom, endermologia e corrente russa.'},{name:'Hidrolipoclasia ultrassônica'},{name:'Drenodetox'}]},
 {id:'bem-estar',title:'Relaxamento e bem-estar',image:'relaxamento',services:[{name:'Massagem relaxante'},{name:'Auriculoterapia'}]}
];
export const whatsapp = (service) => `https://wa.me/${business.phone}?text=${encodeURIComponent(service === 'homecare' ? 'Olá, Aline! Vim pelo site e gostaria de saber mais sobre os cuidados de homecare.' : service ? `Olá, Aline! Vim pelo site e gostaria de saber mais sobre ${service} e agendar um horário.` : 'Olá, Aline! Vim pelo site e gostaria de agendar um horário.')}`;
