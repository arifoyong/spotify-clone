/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {
  return (
    <div className="flex flex-col h-screen text-sm text-gray-400">
      <div className="bg-blue-500 flex-1 flex overflow-y-hidden">
        <div className="sidebar bg-gray-900-spotify w-48 flex-none flex flex-col justify-between font-semibold">
          <ul className="py-6">
            <li className="border-l-4 border-green-600">
              <a href="#" className="flex items-center mx-4 mt-4 group">
                <svg className="fill-current group-hover:text-white h-6 w-6" width="24" height="24" viewBox="0 0 512 512"  ><g><path d="m426 495.983h-340c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46z"/><path d="m496 263.958c-4.095 0-8.189-1.562-11.313-4.687l-198.989-198.987c-16.375-16.376-43.02-16.376-59.396 0l-198.988 198.988c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l198.988-198.989c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627-3.123 3.125-7.218 4.687-11.313 4.687z"/></g></svg>
                <span className="ml-2 group-hover:text-white">home</span>
              </a>
            </li>
            <li className="border-l-4 border-green-600">
              <a href="#" className="flex items-center mx-4 mt-4 group">
                <svg className="fill-current group-hover:text-white h-6 w-6" width="24" height="24" viewBox="0 0 512 512"><path d="M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"/></svg>
                  <span className="ml-2 group-hover:text-white">Browse</span>
              </a>
            </li>
            <li className="border-l-4 border-green-600">
              <a href="#" className="flex items-center mx-4 mt-4 group">
                <svg className="fill-current group-hover:text-white h-6 w-6" width="24" height="24" viewBox="0 0 511.982 511.982" >
                  <path d="M255.991 169.039c-30.327 0-55 24.673-55 55 0 25.127 16.943 46.356 40 52.904v171.096c0 8.284 6.716 15 15 15s15-6.716 15-15V276.943c23.057-6.547 40-27.777 40-52.904 0-30.327-24.673-55-55-55zM186.597 143.845c-5.857-5.858-15.354-5.858-21.213 0-46.505 46.503-46.512 121.781 0 168.291 5.859 5.858 15.355 5.858 21.213 0 5.858-5.857 5.858-15.355 0-21.213-34.78-34.779-34.786-91.08 0-125.865 5.858-5.858 5.858-15.356 0-21.213zM346.597 143.845c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c34.701 34.701 34.701 91.164 0 125.865-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 46.399-46.397 46.399-121.894 0-168.291z"/>
                  <path d="M141.342 119.803c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0-71.352 71.352-71.352 187.449 0 258.801 5.856 5.857 15.354 5.86 21.213 0 5.858-5.857 5.858-15.355 0-21.213-59.654-59.655-59.654-156.72 0-216.375zM391.852 98.59c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c59.654 59.655 59.654 156.72 0 216.375-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 71.352-71.352 71.352-187.449 0-258.801z"/>
                  <path d="M96.087 74.548c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0-99.941 99.94-99.724 249.587 0 349.311 5.856 5.857 15.354 5.86 21.213 0 5.858-5.857 5.858-15.355 0-21.213-87.475-87.477-87.475-219.408 0-306.885zM437.107 53.335c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c87.477 87.477 87.477 219.408 0 306.885-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 99.94-99.939 99.725-249.587 0-349.311z"/>
                </svg>
                  <span className="ml-2 group-hover:text-white">Radio</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-spotify overflow-y-auto px-5 mt-2">
            <h3 className="uppercase tracking-widest text-gray-500 font-normal text-xs mt-2">Your Library</h3>
            <ul className="leading-extra-loose">
              <li className="truncate">
                <a href="#" className="hover:text-white">Made for you</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Recently Played</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Liked Songs</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Albums</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Artists</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Podcast</a>
              </li>
            </ul>

            <h3 className="uppercase tracking-widest text-gray-500 font-normal text-xs mt-2">Playlists</h3>
            <ul className="leading-extra-loose">
              <li className="truncate">
                <a href="#" className="hover:text-white">Acoustic</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Classic</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Hip-Hop</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">KPOP hits</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">70s & 80s All-time Favorites</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">R&B</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Rock</a>
              </li>
              <li className="truncate">
                <a href="#" className="hover:text-white">Rock & Roll</a>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 h-16 px-4 py-4 flex items-center group">
            <svg className="fill-current text-gray-500 group-hover:text-white h-6 w-6" height="24" viewBox="0 0 512 512" width="24">
              <path d="M256 512C114.836 512 0 397.164 0 256S114.836 0 256 0s256 114.836 256 256-114.836 256-256 256zm0-480C132.48 32 32 132.48 32 256s100.48 224 224 224 224-100.48 224-224S379.52 32 256 32zm0 0"/>
              <path d="M368 272H144c-8.832 0-16-7.168-16-16s7.168-16 16-16h224c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"/>
              <path d="M256 384c-8.832 0-16-7.168-16-16V144c0-8.832 7.168-16 16-16s16 7.168 16 16v224c0 8.832-7.168 16-16 16zm0 0"/>
            </svg>
            <a href="#" className="font-normal  text-gray-500 group-hover:text-white ml-2">New Playlist</a>
          </div>
        </div>
        <div className=" bg-gray-700-spotify flex-1 flex flex-col">
          <div className="top-bar flex items-center px-4 py-2 justify-between">
            <div className="flex items-center">
              <button className="hover:text-white ">
                <svg className="fill-current h-6 w-6 mx-2" viewBox="0 0 32 32">
                  <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
                  <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
                </svg>
              </button>
              <button className="hover:text-white ">
                <svg className="fill-current h-6 w-6 mx-2" viewBox="0 0 32 32">
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                  <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path>
                </svg>
              </button>
              <input className="text-s ml-2 px-2 py-1 w-72 rounded-full focus:outline-none focus:ring-green-700 focus:ring-2 focus:border-transparent" type="text"
                    placeholder="Search"
              />
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none">
                <svg className="fill-current h-6 w-6" viewBox="0 0 32 32">
                  <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                </svg>
              </button>
              <button className="mx-2 hover:underline hover:text-white focus:outline-none">
                marcus.brown
              </button>
              <button className="mt-1 focus:outline-none">
                <svg className="fill-current w-3 h-3 mx-2" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
              </button>
            </div>
          </div>
          <div className="content-spotify overflow-y-auto ">
            <div className="container mx-auto px-24">
              <h2 className="mt-12 text-5xl font-semibold text-white">Home</h2>
              <div className="">
                <h3 className="font-semibold text-xl border-b border-gray-900 pb-2 pt-8">Recently played</h3>
                <div className="flex items-start mt-4 -mx-4">
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://cdnb.artstation.com/p/assets/images/images/008/182/951/large/daanesh-bhathena-havana.jpg?1511017220" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Havana Album Cover</a>
                      <div className="text-gray-500 mt-2">Amazing acoustic cover updated every week</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">667 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://assets.vogue.com/photos/5e332cc5d392da0008ace994/master/w_1600%2Cc_limit/82935618_1015351858835796_6355507249911876416_n.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Future Nostalgia</a>
                      <div className="text-gray-500 mt-2">Future Nostalgia by Dua Lipa</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">6543 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">The Weekend Starboys</a>
                      <div className="text-gray-500 mt-2">Acapellas - The Weekend Starboys </div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">185 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/Bee-Gees-Odessa-album-cover-web-optimised-820.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">The Greatest Album Covers</a>
                      <div className="text-gray-500 mt-2">The Greatest of Bee Gees</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">823 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Pain</a>
                      <div className="text-gray-500 mt-2">Pain - Ryan Jones </div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">85 followers</div>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-xl border-b border-gray-900 pb-2 pt-8">Your Heavy Rotation</h3>
                <div className="flex items-start mt-4 -mx-4">
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://i.mdel.net/i/db/2019/12/1255378/1255378-800w.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Havana Album Cover</a>
                      <div className="text-gray-500 mt-2">Amazing acoustic cover updated every week</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">667 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://iconcollective.edu/wp-content/uploads/Album-Cover-Art.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Future Nostalgia</a>
                      <div className="text-gray-500 mt-2">Future Nostalgia by Dua Lipa</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">6543 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://m.media-amazon.com/images/I/81L-hQibCBL._SS500_.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">The Weekend Starboys</a>
                      <div className="text-gray-500 mt-2">Acapellas - The Weekend Starboys </div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">185 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="data:image/jpeg;base64,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" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">The Greatest Album Covers</a>
                      <div className="text-gray-500 mt-2">The Greatest of Bee Gees</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">823 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://3.bp.blogspot.com/-HIvaLz6BabY/U6OSzBm1g5I/AAAAAAAABac/oUAZZIua1jw/s1600/barber+-+shaving+cream.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Pain</a>
                      <div className="text-gray-500 mt-2">Pain - Ryan Jones </div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">85 followers</div>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-xl border-b border-gray-900 pb-2 pt-8">Random Suggestion</h3>
                <div className="flex items-start mt-4 -mx-4">
                <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://www.hellokpop.com/wp-content/uploads/2012/08/tumblr_m9204fWyuj1rw9k3qo1_r3_500.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">The Weekend Starboys</a>
                      <div className="text-gray-500 mt-2">Acapellas - The Weekend Starboys </div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">185 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://i.dailymail.co.uk/i/pix/2014/06/22/article-2664852-1F027C5500000578-790_634x632.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Future Nostalgia</a>
                      <div className="text-gray-500 mt-2">Future Nostalgia by Dua Lipa</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">6543 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://cdn.i-scmp.com/sites/default/files/d8/yp/images/b8ec5d4e-963d-11e8-acb0-2eccab85240cimagehires133506.jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">The Greatest Album Covers</a>
                      <div className="text-gray-500 mt-2">The Greatest of Bee Gees</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">823 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/4Mpa7NNpu.png?output-format=jpg" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Havana Album Cover</a>
                      <div className="text-gray-500 mt-2">Amazing acoustic cover updated every week</div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">667 followers</div>
                    </div>
                  </div>
                  <div className="w-1/5 mx-4 ">
                    <div>
                      <a href="#">
                        <img src="data:image/jpeg;base64,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" alt="album cover"/>
                      </a>
                    </div>
                    <div className="font-semibold mt-2 hover:text-white">
                      <a href="#">Pain</a>
                      <div className="text-gray-500 mt-2">Pain - Ryan Jones </div>
                      <div className="uppercase tracking-widest text-xs text-gray-500 mt-2">85 followers</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-gray-700-spotify flex-none items-center h-20 px-5 flex justify-between">
        <div className="flex items-center">
          <a href="#">
            <img  className="h-12 w-12" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" alt="album-cover" />
          </a>
          <div className="ml-3">
            <div><a href="#" className="hover:underline hover:text-white"> Name of song</a></div>
            <div><a href="#" className="text-xs text-gray-500 hover:underline hover:text-white">Name of artist</a></div>
          </div>
        </div>
        <div className="player-controls flex flex-col justify-center ">
          <div className="flex justify-center">
            <button className="ml-4 focus:outline-none hover:text-white">
              <svg className="fill-current w-4 h-4" viewBox="0 0 32 32">
                <path d="M24 22h-3.172l-5-5 5-5h3.172v5l7-7-7-7v5h-4c-0.53 0-1.039 0.211-1.414 0.586l-5.586 5.586-5.586-5.586c-0.375-0.375-0.884-0.586-1.414-0.586h-6v4h5.172l5 5-5 5h-5.172v4h6c0.53 0 1.039-0.211 1.414-0.586l5.586-5.586 5.586 5.586c0.375 0.375 0.884 0.586 1.414 0.586h4v5l7-7-7-7v5z"></path>
              </svg>
            </button>
            <button className="ml-4 focus:outline-none hover:text-white">
              <svg className="fill-current w-4 h-4"viewBox="0 0 32 32">
                <path d="M18 5v10l10-10v22l-10-10v10l-11-11z"></path>
              </svg>
            </button>
            <button className="ml-4 focus:outline-none hover:text-white">
              <svg  className="fill-current w-4 h-4" viewBox="0 0 32 32">
                <path d="M6 4l20 12-20 12z"></path>
              </svg>
            </button>
            <button className="ml-4 focus:outline-none hover:text-white">
              <svg  className="fill-current w-4 h-4" viewBox="0 0 32 32">
                <path d="M16 27v-10l-10 10v-22l10 10v-10l11 11z"></path>
              </svg>
            </button>
            <button className="ml-4 focus:outline-none hover:text-white">
              <svg className="fill-current w-4 h-4"  viewBox="0 0 32 32">
                <path d="M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z"></path>
                <path d="M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z"></path>
              </svg>
            </button>
          </div>
          <div className="max-w-full mt-3 flex items-center justify-center">
            <div className="text-xs text-gray-500">1:20</div>
            <div className="bg-gray-500 rounded-lg w-full xl:w-200 h-1 ml-3"></div>
            <div className="ml-3 text-xs text-gray-500">3:21</div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="focus:outline-none">
            <svg className="fill-current w-4 h-4"viewBox="0 0 32 32">
              <path d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path>
              <path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>
            </svg>
          </button>
          <button className="bg-gray-500 rounded-lg w-full xl:w-20 h-1 mx-3 focus:outline-none"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
