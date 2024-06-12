// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

 
  let name = prompt('What is your name?')
  let mountain = prompt('What mountain do you identify with?')
  let river = prompt('What river do you identify with')
  let hometown =prompt('What is your hometown?')
  

  alert('Your mihi:')
  alert('Tēnā koutou')
  alert('Kei te mihi au ki a ' + mountain + ',')
  alert('Kei te mihi su ki a ' + river + ',')
  alert('Ko Te Titiri o Waitangi te waka,')
  alert('Ko te Aotearoa te iwe,')
  alert('No ' + hometown + ' au')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}