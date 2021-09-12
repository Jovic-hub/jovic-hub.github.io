import React, {useState, useEffect, useRef}from 'react';
import './switch.scss'
import quiz from './images/quiz.jpg'
import github from './images/github.png'
import github_dark from './images/github_dark.png'
import heroku from './images/heroku.png'
import heroku_dark from './images/heroku_dark.png'
import space from './images/space.png'
import rooms from './images/room.png'
import jovic from './images/jovic.png'
import rails from './images/rails.png'
import oriented from './images/oriented.jpg'
import cplus from './images/cplus.png'
import jorge from './images/jorge.png'

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
const Portfolio =({home})=>{
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
          <div className="bg-purple-100 dark:bg-gray-700 min-h-screen min-w-screen font-mono">
            <div className="pt-4 pl-12">
              <Switch dark={isDark} onToggle={()=>toggleIsDark(isDark)}/>
              <a onClick={home} class="font-bold font-mono text-2xl pl-6 dark:text-white card">Home</a>
            </div>
            <div className="pt-4 justify-items-start">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={space}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">Spacestagram</a>
                          <p class="mt-2 dark:text-white">Using NASA API, I developed a Instagram from Space with ReactJS.</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/Spacestagram" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                            <a href="https://spacestagram-joao.herokuapp.com/" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? heroku_dark : heroku)}/></a>  
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; ReactJS, HTML+CSS.</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="pt-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={quiz}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">Quiz app using ReactJS</a>
                          <p class="mt-2 dark:text-white">Using ReactJS, I developed a complete Quiz App, with different difficulties and a whole of different scenarios every time that is played.</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/Quiz-App-React" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                            <a href="https://quiz-app-test-jovic.herokuapp.com/" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? heroku_dark : heroku)}/></a>  
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; ReactJS, HTML+CSS.</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="pt-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={rooms}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">App Airbnb style.</a>
                          <p class="mt-2 dark:text-white">I developed a Airbnb with authentication system, booking system and responsive design.</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/Airbnb-App-Express" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                            <a href="https://assignment2-web322-joao.herokuapp.com/" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? heroku_dark : heroku)}/></a>  
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; Express, MongoDB, CRUD, HTML + CSS.</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="pt-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={jovic}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">jovic.dev</a>
                          <p class="mt-2 dark:text-white">My website, made using ReactJS.</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/Jovic-hub.github.io" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; ReactJS, HTML+CSS</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="pt-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={rails}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">Image Repository</a>
                          <p class="mt-2 dark:text-white">I developed this Image Repository using Ruby on Rails and Amazon S3..</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/Image-repository-rails" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; Ruby on Rails, Amazon S3, HTML+CSS</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="pt-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={oriented}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">Object Oriented Programming</a>
                          <p class="mt-2 dark:text-white">All that I developed during the OOP244, the object-oriented programming course using C++</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/Object-oriented-programming" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; C++, Software Development</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="pt-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={cplus}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">Advanced Object Oriented Programming</a>
                          <p class="mt-2 dark:text-white">All that I developed during the OOP345, the advanced object-oriented programming course using C++</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/Advanced-Object-Oriented-Programming" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; ReactJS, HTML+CSS</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="py-12">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-red-500 shadow-lg transform -skew-y-6 sm:skew-y-3 sm:-rotate-6 sm:rounded-3xl dark:bg-yellow-500"></div>
                  <div class="relative max-w-md mx-auto bg-white dark:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                          <img class="h-48 w-full object-cover md:h-full md:w-64" src={jorge}/>
                        </div>
                        <div class="p-4">
                          <a href="#" class="block mt-1 text-lg text-center leading-tight font-bold text-black hover:underline dark:text-white">jorgefernandes.adv.br</a>
                          <p class="mt-2 dark:text-white">Peronsal Website developed for the Lawyer Jorge Fernandes.</p>
                          <center>
                            <a href="https://github.com/Jovic-hub/jorgefernandes.adv.br" target="_blank"><img class="h-10 w-10 inline" src={(isDark ? github_dark : github)}/></a>   
                          </center> 
                          <p className="text-left dark:text-white">Learning Outcomes&rarr; HTML+CSS</p>     
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Portfolio;
