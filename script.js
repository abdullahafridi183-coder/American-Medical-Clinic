const CONFIG = {
  // Paste your Google Apps Script Web App /exec URL here after deployment.
  APPS_SCRIPT_URL: "",
  // Put the clinic's official WhatsApp number in international format, digits only.
  WHATSAPP_NUMBER: "55 31 7135-2798",
  clinicInstagram: "https://www.instagram.com/clinicaamericanmedical/"
};

const data = {
  pt: {
    services: [
      ["01","Consultas médicas","Área reservada para a descrição oficial das consultas oferecidas."],
      ["02","Atendimento especializado","Substitua este texto pelas especialidades oficialmente confirmadas."],
      ["03","Avaliações","Espaço para exames, avaliações ou procedimentos confirmados."],
      ["04","Acompanhamento","Descrição do acompanhamento e retorno oferecidos pela clínica."],
      ["05","Orientação","Informações oficiais sobre orientação e prevenção."],
      ["06","Atendimento internacional","Área preparada para explicar suporte a pacientes internacionais."]
    ],
    faqs: [
      ["Como posso agendar uma consulta?","Use o formulário de agendamento desta página. A equipe poderá retornar pelos dados informados."],
      ["A clínica atende em inglês?","A interface do site oferece Português e English. Confirme com a clínica quais profissionais realizam atendimento em inglês."],
      ["Onde fica a clínica?","Av. do Contorno, 5740, Santa Efigênia, Belo Horizonte — MG, 30110-017, Brasil."],
      ["Quais serviços estão disponíveis?","A lista deve ser atualizada com os serviços oficiais da clínica antes da publicação."]
    ]
  },
  en: {
    services: [
      ["01","Medical consultations","Reserved area for the official description of the consultations offered."],
      ["02","Specialized care","Replace this text with the officially confirmed specialties."],
      ["03","Assessments","Space for officially confirmed exams, assessments or procedures."],
      ["04","Follow-up care","Official description of follow-up and return visits."],
      ["05","Guidance","Official information about guidance and prevention."],
      ["06","International care","Area prepared to explain support for international patients."]
    ],
    faqs: [
      ["How can I book an appointment?","Use the appointment form on this page. The clinic team can reply using the details you provide."],
      ["Does the clinic provide care in English?","The website supports Portuguese and English. Confirm with the clinic which professionals provide English-language care."],
      ["Where is the clinic located?","Av. do Contorno, 5740, Santa Efigênia, Belo Horizonte — MG, 30110-017, Brazil."],
      ["Which services are available?","The list should be updated with the clinic's official services before publication."]
    ]
  }
};

const translations = {
  pt:{
    top:"Atendimento acolhedor • Belo Horizonte, MG",book:"Agendar consulta",navAbout:"Sobre",navServices:"Serviços",navExperience:"Experiência",navGallery:"Galeria",navFaq:"FAQ",navContact:"Contato",
    eyebrow:"Cuidado médico com uma experiência humana",heroTitle:"Saúde com <em>confiança</em>, tecnologia e acolhimento.",heroText:"Um espaço pensado para oferecer atendimento profissional, comunicação clara e uma experiência confortável em cada etapa.",heroBtn:"Agendar atendimento",explore:"Conhecer serviços",metaLocation:"Belo Horizonte",metaLanguage:"Português",metaEnglish:"English support",mediaNote:"Insira aqui a foto ou vídeo oficial da clínica",openCare:"Atendimento",openCare2:"Agende seu horário",care:"Cuidado<br>em cada detalhe",
    trust1:"Atendimento humano",trust2:"Comunicação clara",trust3:"Experiência moderna",trust4:"PT / EN",aboutLabel:"SOBRE",aboutKicker:"Uma clínica pensada para pessoas",aboutTitle:"Mais do que uma consulta. Uma experiência de cuidado.",aboutText:"A American Medical pode usar este espaço para apresentar sua história, equipe, valores e diferenciais. O conteúdo abaixo está estruturado para receber as informações oficiais da clínica sem precisar alterar o layout.",stat1:"Acolhimento",stat2:"Precisão",stat3:"Tecnologia",stat4:"Confiança",
    servicesLabel:"SERVIÇOS",servicesKicker:"Atendimento",servicesTitle:"Serviços organizados para uma jornada simples.",editNote:"Os serviços abaixo são campos editáveis. Substitua pelos serviços oficialmente oferecidos pela clínica antes da publicação.",
    experienceLabel:"EXPERIÊNCIA",experienceKicker:"Um espaço para cuidar melhor",experienceTitle:"Elegância, clareza e tecnologia em um só lugar.",experienceText:"A estrutura desta página foi criada para destacar a clínica sem excesso de informação: mensagens curtas, chamadas claras, animações suaves e uma navegação rápida em qualquer tela.",check1:"Layout responsivo para celular, tablet e desktop",check2:"Sistema de idioma Português / English",check3:"Formulários conectados ao Google Sheets",check4:"Área preparada para fotos e vídeos oficiais",panel1:"Recepção",panel2:"Atendimento",panel3:"Acompanhamento",panel4:"Cuidado contínuo",
    galleryLabel:"GALERIA",galleryKicker:"Imagem real da clínica",galleryTitle:"Mostre o espaço que seus pacientes vão encontrar.",photoHint:"Coloque uma foto oficial aqui",videoHint:"Coloque um vídeo oficial aqui",appointmentEyebrow:"AGENDAMENTO",appointmentTitle:"Vamos encontrar um horário para você.",appointmentText:"Preencha o formulário. A equipe pode retornar usando os dados informados.",
    name:"Nome",phone:"Telefone",email:"E-mail",service:"Serviço",date:"Data preferida",time:"Horário",message:"Mensagem",consent:"Concordo em enviar meus dados para contato sobre este atendimento.",send:"Enviar solicitação",contactLabel:"CONTATO",contactKicker:"Onde estamos",openMaps:"Abrir no Google Maps ↗",subject:"Assunto",faqKicker:"Dúvidas",faqTitle:"Informação clara antes de chegar.",footerText:"Website institucional • Conteúdo oficial deve ser confirmado pela clínica antes da publicação."
  },
  en:{
    top:"Welcoming care • Belo Horizonte, MG",book:"Book an appointment",navAbout:"About",navServices:"Services",navExperience:"Experience",navGallery:"Gallery",navFaq:"FAQ",navContact:"Contact",
    eyebrow:"Medical care with a human experience",heroTitle:"Health with <em>confidence</em>, technology and care.",heroText:"A space designed to provide professional care, clear communication and a comfortable experience at every step.",heroBtn:"Book an appointment",explore:"Explore services",metaLocation:"Belo Horizonte",metaLanguage:"Portuguese",metaEnglish:"English support",mediaNote:"Place the clinic's official photo or video here",openCare:"Appointments",openCare2:"Book your time",care:"Care<br>in every detail",
    trust1:"Human care",trust2:"Clear communication",trust3:"Modern experience",trust4:"PT / EN",aboutLabel:"ABOUT",aboutKicker:"A clinic designed around people",aboutTitle:"More than an appointment. An experience of care.",aboutText:"American Medical can use this space to introduce its story, team, values and differentiators. The content is structured so official information can be added without changing the layout.",stat1:"Welcoming",stat2:"Precision",stat3:"Technology",stat4:"Trust",
    servicesLabel:"SERVICES",servicesKicker:"Care",servicesTitle:"Services organized for a simple journey.",editNote:"The services below are editable fields. Replace them with the clinic's officially confirmed services before publishing.",
    experienceLabel:"EXPERIENCE",experienceKicker:"A space designed for better care",experienceTitle:"Elegance, clarity and technology in one place.",experienceText:"This page is designed to showcase the clinic without information overload: short messages, clear calls to action, smooth animations and fast navigation on every screen.",check1:"Responsive layout for mobile, tablet and desktop",check2:"Portuguese / English language system",check3:"Forms connected to Google Sheets",check4:"Area prepared for official photos and videos",panel1:"Reception",panel2:"Appointment",panel3:"Follow-up",panel4:"Continuous care",
    galleryLabel:"GALLERY",galleryKicker:"Real clinic imagery",galleryTitle:"Show patients the space they will experience.",photoHint:"Place an official photo here",videoHint:"Place an official video here",appointmentEyebrow:"APPOINTMENT",appointmentTitle:"Let's find a time that works for you.",appointmentText:"Complete the form. The clinic team can reply using the information provided.",
    name:"Name",phone:"Phone",email:"Email",service:"Service",date:"Preferred date",time:"Preferred time",message:"Message",consent:"I agree to provide my details so the clinic can contact me about this request.",send:"Send request",contactLabel:"CONTACT",contactKicker:"Find us",openMaps:"Open in Google Maps ↗",subject:"Subject",faqKicker:"Questions",faqTitle:"Clear information before you arrive.",footerText:"Institutional website • Official clinic content should be confirmed before publishing."
  }
};

let currentLang = localStorage.getItem("am-lang") || "pt";

function renderContent(){
  const t=translations[currentLang];
  document.documentElement.lang=currentLang==="pt"?"pt-BR":"en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.innerHTML=t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===currentLang));
  const serviceGrid=document.getElementById("serviceGrid");
  const serviceSelect=document.getElementById("serviceSelect");
  serviceGrid.innerHTML=data[currentLang].services.map(s=>`<article class="service-card reveal"><span class="service-num">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join("");
  serviceSelect.innerHTML=`<option value="">${currentLang==="pt"?"Selecione":"Select"}</option>`+data[currentLang].services.map(s=>`<option>${s[1]}</option>`).join("");
  document.getElementById("faqList").innerHTML=data[currentLang].faqs.map((f,i)=>`<div class="faq-item"><div class="faq-q"><span>${f[0]}</span><span>+</span></div><div class="faq-a">${f[1]}</div></div>`).join("");
  document.querySelectorAll(".faq-q").forEach(q=>q.addEventListener("click",()=>q.parentElement.classList.toggle("open")));
  document.getElementById("year").textContent=new Date().getFullYear();
  observeReveals();
}

function observeReveals(){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll(".reveal:not(.visible)").forEach(el=>io.observe(el));
}

document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>{
  currentLang=btn.dataset.lang;localStorage.setItem("am-lang",currentLang);renderContent();
}));

document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));

async function submitForm(form,statusEl){
  statusEl.className="form-status";statusEl.textContent=currentLang==="pt"?"Enviando...":"Sending...";
  const formData=new FormData(form);
  const payload=Object.fromEntries(formData.entries());
  payload.language=currentLang;
  payload.timestamp=new Date().toISOString();

  if(!CONFIG.APPS_SCRIPT_URL){
    statusEl.className="form-status error";
    statusEl.textContent=currentLang==="pt"?"Backend ainda não configurado. Cole a URL /exec no script.js.":"Backend is not configured yet. Paste the /exec URL into script.js.";
    return;
  }
  try{
    await fetch(CONFIG.APPS_SCRIPT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(payload)});
    form.reset();
    statusEl.className="form-status ok";
    statusEl.textContent=currentLang==="pt"?"Solicitação enviada. A equipe poderá entrar em contato em breve.":"Request sent. The clinic team can contact you soon.";
  }catch(err){
    statusEl.className="form-status error";
    statusEl.textContent=currentLang==="pt"?"Não foi possível enviar. Verifique a conexão ou o endereço /exec.":"Could not send. Check the connection or the /exec URL.";
  }
}

document.getElementById("appointmentForm").addEventListener("submit",e=>{e.preventDefault();submitForm(e.currentTarget,document.getElementById("appointmentStatus"))});
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();submitForm(e.currentTarget,document.getElementById("contactStatus"))});

const wa=document.getElementById("whatsappBtn");
wa.addEventListener("click",e=>{
  if(!CONFIG.WHATSAPP_NUMBER){e.preventDefault();alert(currentLang==="pt"?"Adicione o número oficial do WhatsApp em CONFIG.WHATSAPP_NUMBER no script.js.":"Add the official WhatsApp number to CONFIG.WHATSAPP_NUMBER in script.js.");return;}
  wa.href=`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(currentLang==="pt"?"Olá! Gostaria de obter informações sobre atendimento.":"Hello! I would like information about an appointment.")}`;
});
renderContent();
