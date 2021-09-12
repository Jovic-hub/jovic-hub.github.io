import React, {useState, useEffect, useRef}from 'react';
import './switch.scss'
import jovic from './images/jovic.jfif'
import github from './images/github.png'
import mail from './images/mail.png'
import linkedin from './images/linkedin.png'
import linkedin_dark from './images/linkedin_dark.png'
import js from './images/js.png'
import c from './images/c++.png'
import react from './images/react.png'
import mysql from './images/mysql.png'
import ruby from './images/ruby.png'
import mongo from './images/mongodb.png'
import github_dark from './images/github_dark.png'

let Switch =({dark, onToggle}) =>{
    return(
    <div class="m-2">
      <div class="toggle colour">
          <input id="check3" class="toggle-checkbox hidden" type="checkbox" checked={dark} onClick={onToggle}/>
          <label for="check3" class="toggle-label block w-24 h-12 rounded-full transition-color duration-150 ease-out"></label>
      </div>
    </div>
  )
}
const Home =({port})=>{
    const [isDark, setDark] = useState(() => {
      const useDarkTheme = localStorage.getItem("isDark");
      return useDarkTheme === 'true'
    });
    const toggleIsDark = (isDark) => {
      if(!isDark){
        setDark(true)
      }else{
        setDark(false)
      }
      localStorage.setItem('isDark', !isDark);
    }
    return (
        <div className={(isDark ? 'dark' : '')}>
          <div className="bg-purple-100 dark:bg-gray-700 min-h-screen min-w-screen">
            <div className="pt-4 pl-12">
              <Switch dark={isDark} onToggle={() => toggleIsDark(isDark)}/>
              <a onClick={port} class="font-bold font-mono text-2xl pl-0 dark:text-white card">Portfolio</a>  
            </div>
            <div className="pt-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div class="absolute inset-0 bg-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl dark:bg-green-500"></div>
                  <div class="relative px-4 py-10 bg-white dark:bg-gray-500 shadow-lg sm:rounded-3xl sm:p-5">
                    <div class="max-w-md mx-auto">
                      <div className="items-center">
                        <img src={jovic} class="h-32 w-32 rounded-full mx-auto" />
                      </div>
                      <div class="divide-y divide-gray-200">
                        <div class="py-8 text-center leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                          <p className="font-mono dark:text-white">I moved from Brazil to Canada to elevate my studies and my opportunities, with the objective of giving the best of myself in this seemingly wild 
                            dream of becoming an international programmer so early in my life.</p>
                          <p className="text-center text-blue-500 dark:text-green-200">Joao Victor Fernandes, Web Developer.</p>
                        </div>
                        <div class="pt-6 text-base font-mono leading-6 font-bold sm:text-lg sm:leading-7 dark:text-white">
                          <p>Want to talk with me?</p>
                            Important Links &rarr; <a href="https://github.com/Jovic-hub" target="_blank"><img class="h-8 w-8 inline" src={(isDark ? github_dark : github)}/></a> <a href="https://www.linkedin.com/in/joaovictorf/" target="_blank"><img class="h-8 w-8 inline" src={(isDark ? linkedin_dark : linkedin)}/></a> <a href="mailto: jovico.dev@gmail.com" target="_blank"><img class="h-8 w-8 inline" src={mail}/></a>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              <div className="pt-16">
                <div class="py-8 text-center leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p className="font-mono text-3xl dark:text-white">
                    My favorite technologies:
                  </p>
                  <img class="h-28 w-28 inline" src={js}/><img class="h-28 w-28 inline" src={c}/><img class="h-28 w-28 inline" src={react}/><img class="h-28 w-28 inline" src={mysql}/><img class="h-28 w-28 inline" src={ruby}/> <img class="h-28 w-28 inline" src={mongo}/>
                </div>
              </div>
          </div>
        </div>
      );
}

export default Home;
