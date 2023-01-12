import React from 'react'
import { HiOutlineArrowCircleDown } from "react-icons/hi";
const Accordion = () => {


  async function revertAccordion(event) { 
    event.preventDefault()
    
    let revertId = event.target.getAttribute("data-accordion-target").substr(1, );
  
    let body =document.getElementById(revertId).className
    if(body === "hidden"){
      document.getElementById(revertId).className="open";
    }
    else{
      document.getElementById(revertId).className="hidden";

    }

}

  return (
    <section className='md:px-[90px] px-[30px] mb-[62px]'>


{/* <h2 className="md:text-3xl text-2xl underline mb-[32px] font-bold text-[#3FBAFF] dark:text-white mb-2 text-center">Häufige Fragen</h2> */}
<h2 class="mb-[45px] pt-[32px] text-4xl text-center  font-extrabold tracking-tight text-gray-800 und"><span className='underlined'>FAQ's </span></h2>


<div className='mb-[60px] mx-auto max-w-[800px] ' id="accordion-open" data-accordion="open" >
  <h2 id="accordion-open-heading-1">
    <button type="button" className="bg-gray-900 from-purple-500 to-blue-600 flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray- mb-2" data-accordion-target="#accordion-open-body-1" onClick={revertAccordion} aria-expanded="true" aria-controls="accordion-open-body-1">
      <span data-accordion-target="#accordion-open-body-1" onClick={revertAccordion} aria-expanded="true" aria-controls="accordion-open-body-1"  class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Wie buche ich meine Entrümpelung bei Entsorg Meister? </span>
      <svg data-accordion-icon  class="w-6 h-6 rotate-180 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1" >
    <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Wenn Sie eine Entrümpelung buchen möchten, dann senden Sie uns einfach eine 
kostenlose Anfrage über unsere Online-Plattform. Alternativ können Sie unsere 
Entrümpelungsfirma auch einfach anrufen oder uns eine E-Mail schicken. Sie 
nennen uns dann Ihren Wunschtermin für die Entrümpelung. Alle Anfragen werden 
von uns innerhalb kürzester Zeit beantwortet</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-2">
  <button type="button" className="bg-gray-900 from-purple-500 to-blue-600 flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray- mb-2" onClick={revertAccordion}  data-accordion-target="#accordion-open-body-2" aria-expanded="true" aria-controls="accordion-open-body-2">
      <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Was kostet eine Entrümpelung?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
    <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Die Kosten für eine professionelle Entrümpelung in Deutschland hängen vor allem von der Größe 
und dem Aufwand der zu entrümpelnden Fläche oder Räumlichkeiten ab. Darüber hinaus können 
zusätzliche Kosten für die Entsorgung, z.B. von Sondermüll, anfallen.</p>
      <p class="text-gray-500 dark:text-gray-400"> Bevor Sie eine Entrümpelungsfirma aus Deutschland mit der Entrümpelung und Entsorgung 
beauftragen, sollten Sie unbedingt ein Kostenangebot von verschiedenen Anbietern einholen. Hier 
lohnt sich auf jeden Fall ein Preis-Leistungs-Vergleich. Außerdem wissen Sie im Vorfeld, mit 
welchen Kosten Sie für die Entrümpelung rechnen müssen.</p>
    </div>
  </div>

  <h2 id="accordion-open-heading-3">
  <button type="button" className="bg-gray-900 from-purple-500 to-blue-600 flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray- mb-2" onClick={revertAccordion}  data-accordion-target="#accordion-open-body-3" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Fallen noch weitere Kosten wie z.B. Anfahrtskosten an?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
    <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Das Wichtigste für uns ist es, Ihnen faire und transparente Preise zu bieten. Der mit 
uns vereinbarte Preis ist daher immer ein Festpreis inklusive aller Kosten. Die 
Mehrwertsteuer ist immer enthalten, die Anfahrt sowie die Kosten für die 
Entsorgung ebenfalls</p>
      
    </div>
  </div>

  <h2 id="accordion-open-heading-4">
  <button type="button" className="bg-gray-900 from-purple-500 to-blue-600 flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  mb-2" onClick={revertAccordion}  data-accordion-target="#accordion-open-body-4" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Muss ich während der Entrümpelung anwesend seins?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-4" class="hidden" aria-labelledby="accordion-open-heading-4">
    <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Wir wissen aus Erfahrung, dass Schicksalsschläge oft zu 
Haushaltsauflösungen und Entrümpelungen führen. Die emotionale Belastung 
ist daher für viele Kunden oder Angehörige meist sehr hoch. Aus diesem Grund 
empfehlen wir unseren Kunden, für diesen Tag andere Pläne zu machen, da 
Ihre Anwesenheit nicht zwingend erforderlich ist. Wir sind während der 
Haushaltsauflösung oder Entrümpelung gerne telefonisch für Sie erreichbar 
und melden uns bei Ihnen, sobald unsere Mitarbeiter ihre Arbeit beendet 
haben</p>
     
    </div>
  </div>

  <h2 id="accordion-open-heading-5">
  <button type="button" className="bg-gray-900 from-purple-500 to-blue-600 flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray- mb-2" onClick={revertAccordion}  data-accordion-target="#accordion-open-body-5" aria-expanded="true" aria-controls="accordion-open-body-5">
      <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Was passiert mit meinem Müll und Schrott?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-5" class="hidden" aria-labelledby="accordion-open-heading-3">
    <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Wir arbeiten mit zertifizierten Entsorgungspartner zusammen, bei denen wir 
Ihren Sperrmüll fachgerecht auf dem Wertstoffhof gemäß der neuen 
Mülltrennungsverordnung entsorgen</p>
     
    </div>
  </div>

  <h2 id="accordion-open-heading-6">
  <button type="button" className="bg-gray-900 from-purple-500 to-blue-600 flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray mb-2" onClick={revertAccordion}  data-accordion-target="#accordion-open-body-6" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Kann ich eine Entrümpelung steuerlich absetzten?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-6" class="hidden" aria-labelledby="accordion-open-heading-6">
    <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">In der Regel können wir alles entrümpeln. Angefangen bei der kompletten 
Wohnungsräumung bis hin zur Garagen- oder Kellerräumung. Für 
Gewerbebetriebe übernehmen wir auch die Lager- oder Büroräumung in 
Deutschland. Wir entrümpeln und entsorgen alte Möbel, Sperrmüll aller Art, 
Bauschutt und alte Haushaltsgeräte wie Waschmaschinen oder Kühlschränke. 
Natürlich stehen dir unsere Mitarbeiter bei allen Fragen rund um die 
Entrümpelung und Entsorgung zur Verfügung</p>
   
    </div>
  </div>
  <h2 id="accordion-open-heading-7">
  <button type="button" className="bg-gray-900 from-purple-500 to-blue-600 flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  mb-2" onClick={revertAccordion}  data-accordion-target="#accordion-open-body-7" aria-expanded="true" aria-controls="accordion-open-body-7">
      <span class="flex items-center"><svg class="w-5 h-5 mr-2 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Was können die Entsorg Meister alles entrümpeln?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-7" class="hidden" aria-labelledby="accordion-open-heading-7">
    <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-500 dark:text-gray-400">In der Regel können wir alles entrümpeln. Angefangen bei der kompletten 
Wohnungsräumung bis hin zur Garagen- oder Kellerräumung. Für 
Gewerbebetriebe übernehmen wir auch die Lager- oder Büroräumung in 
Deutschland. Wir entrümpeln und entsorgen alte Möbel, Sperrmüll aller Art, 
Bauschutt und alte Haushaltsgeräte wie Waschmaschinen oder Kühlschränke. 
Natürlich stehen dir unsere Mitarbeiter bei allen Fragen rund um die 
Entrümpelung und Entsorgung zur Verfügung</p>
    
    </div>
  </div>
</div>
</section>
  )
}

export default Accordion