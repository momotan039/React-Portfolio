import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const onLoadApp=()=>{
    let selectedItem:Element|null

window.onload=()=>{
    selectedItem=document.querySelector('#main-menu ul a') 
    const offsetSkill=(document.querySelector("#skills") as HTMLElement).offsetHeight
    window.onscroll=()=>{
    changeSelectedItemWhileScrolling()

        if(window.scrollY>offsetSkill)
            startSkillAnimation()
    }

    selectItemFromMenu()
    // handelArrowButton()
}

function startSkillAnimation(){
    const spans=document.querySelectorAll("#skills .skill")
    spans.forEach(s=>{
        s.classList.add('fill')
    })
}

function selectItemFromMenu(){
    const menu=document.querySelector('#main-menu ul')   
    selectedItem?.classList.add('selected')
    menu?.childNodes.forEach(item=>{
        item.addEventListener('click',()=>{
            selectedItem?.classList.remove('selected')
            const _item=item as Element
            _item.classList.add('selected')
            selectedItem=_item
        })
    })
}
function changeSelectedItemWhileScrolling(){
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    let currentSection:string|null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('selected');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('selected');
      }
    });
}

// function handelArrowButton(){
//     document.querySelectorAll('.arrowsLink').forEach(arrow=>{
//         arrow.addEventListener('click',()=>{
//            const idContainer=arrow.getAttribute('href')
//           const itemMenu=document.querySelector(`nav ul a[href='${idContainer}']`)
//           selectedItem?.classList.remove('selected')
//           itemMenu?.classList.add('selected')
//           selectedItem=itemMenu
//         })
//     })
// }
  }
 useEffect(()=>{
 onLoadApp()
 },[])
  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
