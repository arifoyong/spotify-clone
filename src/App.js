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
        <div className="content-spotify bg-gray-700-spotify flex-1 overflow-y-auto">content Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusantium natus quae, enim cumque repellendus adipisci beatae consequatur, commodi voluptatum ipsa quasi? Doloribus cumque quia accusantium explicabo. Dolorum consectetur officiis blanditiis iste? Laudantium blanditiis atque ipsum non odio inventore natus sapiente! Debitis praesentium, adipisci dolore ad, ratione veritatis quia nesciunt pariatur deserunt et cum exercitationem sit omnis ipsum corporis velit accusantium fuga sed quod? Cum corporis dignissimos possimus natus ipsam soluta veritatis dolor omnis debitis nulla modi neque, repudiandae blanditiis quibusdam voluptatem! Quia, ipsa nisi! Dolorum fuga animi libero? Nisi, minima magni. Non, quo provident! Officia beatae quod earum laudantium saepe, placeat unde veritatis dolor natus quaerat corporis eveniet quae suscipit, magni explicabo error impedit optio, incidunt necessitatibus et accusamus nemo quibusdam iure provident? Ad asperiores fugiat, molestias natus porro voluptas suscipit consectetur vitae non accusamus impedit obcaecati voluptatum error. Molestias eligendi commodi inventore nobis modi provident nostrum corporis numquam corrupti perferendis eos sit dolorem consectetur animi voluptatum earum facilis alias nulla voluptas porro ipsam quo, non nisi ut! Eligendi ex impedit nisi voluptates, deleniti fuga magnam necessitatibus earum inventore assumenda sapiente ut perferendis labore, adipisci deserunt, delectus quo quisquam officiis praesentium ipsam. Illum ad earum, consequuntur, nihil quos quas magni, aliquid porro itaque laborum corrupti laboriosam voluptas molestiae vel? Esse ad aperiam quod unde eaque fuga accusantium dolor provident quidem corporis ducimus libero quaerat iusto iure totam perferendis illo, pariatur nesciunt voluptatibus! Tenetur id velit laboriosam eum quaerat hic blanditiis? Praesentium, vitae sapiente a est cumque aperiam mollitia sunt illo repellat, velit tempora ratione architecto alias consequuntur ut maxime quaerat saepe autem id temporibus consectetur iure facilis quos quae? Voluptatem harum officiis officia impedit est repellendus aliquam, maxime non esse vel culpa eius? Provident temporibus saepe dolorum quis libero, id, obcaecati, maiores deserunt repellendus atque itaque quibusdam pariatur eius? Voluptas animi laborum error eum? Perspiciatis aliquam sint cumque id veniam fugit odit voluptatum iste animi. Delectus minima dignissimos alias optio iste possimus aliquam corrupti vero, explicabo dolorem veniam maiores enim, quae neque cumque. Accusantium a sequi eos eveniet quibusdam rerum, minus porro inventore ipsa vel dolores, officiis facilis molestias consectetur debitis veritatis fuga. Ducimus cum illum atque assumenda laudantium at doloribus, iure ut quas corporis architecto quaerat! Distinctio ullam autem quos aspernatur. Totam beatae provident autem asperiores placeat repellendus quia deserunt sapiente, nemo nostrum quo est omnis dolores earum debitis veritatis itaque harum consectetur recusandae magnam. Incidunt officia quibusdam nihil in delectus, aliquid unde velit soluta nam maxime hic animi et ut at a, expedita neque amet inventore pariatur beatae explicabo eligendi ex id! Ab aperiam, dignissimos qui numquam officiis a illum harum libero autem explicabo quod fuga itaque mollitia totam, at iste ipsam tenetur. Iure expedita, quam, excepturi a non corrupti, temporibus omnis totam illum culpa dolore natus animi! Eveniet, quis animi, quibusdam hic nesciunt vel modi nulla fugit minus fugiat inventore similique eaque illo repudiandae aspernatur natus dolor debitis! Dicta dolor consectetur laudantium autem, a saepe consequatur excepturi corrupti debitis, atque aspernatur tenetur quod dolore. Eveniet cupiditate assumenda, harum velit hic sint expedita quis. Consectetur molestiae maiores, quos nemo corporis ut quidem quo sit numquam ea aperiam voluptates ipsam hic reprehenderit repudiandae rem. Laboriosam, a iste ab reprehenderit dolor sequi veniam corrupti id sed, natus perspiciatis aperiam illum voluptatem, nam consequuntur unde debitis adipisci ipsa! Praesentium enim ad nulla obcaecati asperiores ut fugit dolor maxime laudantium facere ullam sint reiciendis eligendi architecto voluptatem ab porro temporibus non nostrum, distinctio dolorem totam iusto cumque! Reiciendis quidem est perspiciatis doloremque, quas temporibus. Sit possimus inventore tenetur quod mollitia hic quibusdam, sed voluptatibus enim soluta earum veritatis illo a alias veniam odio pariatur accusamus corrupti nobis rem? Libero fugiat odio natus. A asperiores doloribus eligendi suscipit praesentium unde qui facere architecto, aliquam laborum aspernatur eaque sequi saepe voluptatum, optio deserunt maiores ipsum! Ratione harum totam unde dolor quod neque nam nulla rem, consequuntur, autem optio minus repellat iure enim rerum! Commodi exercitationem non minus, fuga corporis officia obcaecati debitis modi labore sint. Suscipit, quas ratione reiciendis aperiam perferendis iusto? Totam sequi rerum veritatis ut blanditiis quidem aliquid culpa soluta sit reiciendis alias hic reprehenderit, autem sint voluptatum, ad repellat voluptas consequuntur iure possimus! Vitae, assumenda. Sint, suscipit nobis. Natus esse voluptas quam dolorem, necessitatibus minus consequatur facilis, mollitia laborum quod saepe libero iure maxime voluptatum suscipit aut officiis expedita minima enim adipisci ipsa aspernatur illum incidunt. Eveniet, expedita? Consequatur praesentium unde amet quas itaque commodi ipsum id aut perspiciatis doloremque sapiente nostrum corrupti dolorum, nobis similique ipsa, obcaecati sint ullam consequuntur accusantium optio eum! Ad vel, eaque praesentium rem molestiae quasi numquam harum saepe magni vitae nobis vero sint provident velit ut labore maxime, possimus ab ipsum nesciunt! In adipisci iste nostrum enim eligendi consequuntur quo consectetur perferendis minima excepturi sapiente quam nisi laborum odit error cumque mollitia quaerat vero dolor ad, commodi dolore quisquam deleniti fugiat? Facere quam voluptatibus aut odio atque voluptates molestiae eveniet aliquid nihil. Aut doloribus vel fugit molestiae dolores cupiditate delectus enim maxime eaque, eos ea quis libero a minima nobis incidunt ut labore, perspiciatis nihil eius totam ratione recusandae amet commodi? Eligendi error quo doloribus veniam eius autem accusamus eum, tempore consequatur suscipit quae quam unde fugiat fugit vero, iste rerum rem dolorem ea corporis voluptas. Laboriosam aut, quod tenetur quisquam minus itaque delectus ipsam harum debitis, laudantium reiciendis. Asperiores iusto hic, quisquam atque eligendi pariatur officiis voluptatum ab autem quia excepturi omnis consequatur velit aliquam nesciunt possimus neque quas, qui fugit quae culpa, quo dolore. Explicabo alias labore tenetur? Ipsum asperiores soluta ea dolore quas, ipsa, unde laudantium iste doloribus, enim hic nostrum voluptatum quam vel nemo distinctio facilis illo minus corporis illum. Natus accusantium animi quaerat assumenda, reprehenderit voluptas vel molestiae. Dolor ea officiis necessitatibus ullam labore? Enim esse modi autem doloribus rem laudantium reprehenderit mollitia sapiente provident, omnis delectus reiciendis numquam impedit sequi qui porro officiis iure? Ipsam esse delectus fuga similique sunt cumque reiciendis ullam explicabo expedita voluptas aliquam perferendis est enim, maiores, sapiente cum neque consequatur nam asperiores a. Animi laboriosam ratione molestiae consequatur ipsum rem ipsa quos, accusamus eveniet eligendi asperiores officia libero ducimus saepe repudiandae aut eos beatae voluptatibus mollitia! Accusantium modi autem possimus animi fugiat excepturi repellat voluptas maiores enim quod distinctio provident veniam fuga incidunt debitis aperiam, quis cupiditate asperiores assumenda placeat explicabo quae? Rerum sit eveniet unde labore rem, reprehenderit consequatur nulla cum libero suscipit, voluptatum placeat non quasi perspiciatis sequi repudiandae, necessitatibus illum! Possimus aliquid vero similique eligendi quae quam laborum perspiciatis sapiente ducimus perferendis, porro alias sit distinctio incidunt, eius id magnam rerum voluptatibus, excepturi odit modi eum cumque reiciendis fuga. Odit, dolorem. Odit voluptas tempora adipisci doloribus sint ab quam sit, ipsa, consequatur necessitatibus suscipit beatae iste minima autem et delectus. Quasi corrupti animi tenetur quidem est, libero itaque laboriosam, ipsam, quibusdam voluptates adipisci. Saepe eum deleniti qui libero, reiciendis eligendi explicabo iusto. Eligendi inventore ratione mollitia eos necessitatibus iure nobis perferendis quis assumenda quia sunt expedita consectetur eaque atque, magnam dolorem autem vero fugit tenetur culpa dicta est. Voluptate laudantium assumenda debitis recusandae voluptates velit quasi expedita, dignissimos veritatis vel sequi cumque molestias similique soluta nihil a, maiores quam! Dolore atque placeat ullam ad eos. Temporibus nemo ullam quo laborum voluptatum laudantium sunt sequi, quos excepturi corporis labore quas velit accusamus aliquid nesciunt laboriosam expedita? Natus fugit deleniti deserunt? Expedita, corrupti ipsum ab pariatur voluptatem modi adipisci illo nihil repellendus harum. Quos nulla laboriosam aperiam nam asperiores nisi voluptates quo quidem ullam facilis aut, dolorum sit quae eveniet assumenda dicta veritatis inventore natus quis perspiciatis reiciendis itaque. In perspiciatis iure ipsa, odio sit maxime magnam quibusdam, unde deleniti laboriosam delectus tempora autem rem est odit nisi, quis aspernatur repudiandae illum accusantium? Doloribus pariatur molestiae ipsum quidem ex aut ratione voluptas accusantium nihil architecto cum, corrupti, est eligendi. Labore quis, magnam debitis sint repudiandae cum totam omnis deleniti deserunt nihil quo unde! Eius nam, perferendis soluta consequuntur porro quas nesciunt placeat in dicta minus tempore magnam, nihil maxime exercitationem ut! Obcaecati, explicabo? Mollitia ipsam facere ducimus commodi accusamus inventore non, exercitationem nam amet fugit qui fugiat! Deleniti eligendi quos delectus assumenda molestias provident, aut reiciendis unde repellat est? Ex animi numquam vitae quibusdam tempora blanditiis iste! Nam neque sint officia soluta, placeat, commodi corporis sit esse similique fugit, est quia incidunt. Optio quam beatae dignissimos ducimus tempore aliquam blanditiis ullam velit, sit, harum iusto mollitia perferendis natus sed quo fugiat nulla laborum facere? Necessitatibus consequatur odit quis voluptatibus vitae unde ea recusandae modi autem, quisquam omnis quae eos veritatis tempora quos nemo iusto consequuntur est quod mollitia. Reprehenderit dolorem officia eveniet totam atque aperiam amet, porro, nulla, similique temporibus provident delectus voluptas aut dignissimos sapiente! Recusandae architecto adipisci libero natus enim quidem exercitationem. At asperiores nesciunt mollitia reprehenderit dolores voluptatum itaque cum quae, illum ipsam laboriosam ipsa debitis! Beatae optio officia ratione assumenda tempore distinctio mollitia facilis! Nihil, eligendi eos quia similique, odio dignissimos dolor, ex sint culpa rem quos provident nulla iure? Dolorum ipsa reiciendis quas non cupiditate perferendis, repellendus accusamus aliquid a doloremque doloribus quidem quam ex et eius odio? Blanditiis, sint vero, fuga inventore facilis cupiditate numquam qui ipsa, aspernatur a enim. Dolore odio, id suscipit aut voluptatem ullam ratione molestias modi alias nostrum enim quidem quisquam, porro iure maxime delectus? Ullam ipsam molestiae aliquam, at doloribus veritatis consequatur quas tempora vitae autem! Dicta odit culpa vero quo ea facilis sint enim possimus veritatis molestias a accusamus, facere expedita rem, aliquid velit quia consectetur cum optio ratione! At, ducimus. Officia sunt commodi vel, alias cumque labore iste, ut obcaecati atque distinctio eius inventore nemo asperiores ratione et illo? Culpa harum laboriosam corrupti porro, omnis at blanditiis, iste qui amet modi libero. A, eligendi alias fugit magnam tempora culpa odit consequatur non tenetur reiciendis asperiores laborum distinctio, libero rerum ut voluptatem corrupti in sapiente quas, consectetur dolores cum ipsa. Neque exercitationem deserunt at repellat pariatur asperiores quis nesciunt quia libero aliquam quos, aperiam quibusdam eveniet et vel. Nobis culpa autem officia dolore, dolorem voluptatem ipsam provident recusandae incidunt numquam, distinctio, quae temporibus. Doloribus eius facere perspiciatis commodi ducimus distinctio omnis voluptate assumenda ex necessitatibus odio laboriosam, repellendus voluptas vero dolorem ipsum. Laudantium fugit modi architecto tempore velit labore aut. Modi animi sed, autem fugiat aut deserunt eum perspiciatis minima! Quam eveniet error ducimus nihil velit, tempora quia temporibus sequi animi fuga cumque odit voluptatum consectetur provident, dicta doloribus. Officia id illo optio labore repellendus? Provident nobis asperiores adipisci beatae ipsum perferendis corporis doloremque cum aperiam reprehenderit. Blanditiis, dignissimos quae exercitationem, quam distinctio repellendus nobis doloribus velit deleniti modi provident nesciunt voluptate dicta dolore! Tempore maiores excepturi dolorem non quidem, esse quis harum voluptatibus itaque nemo in, perspiciatis ex! Velit ipsam, odio nulla consectetur quis dolore non ex, ipsa error quasi inventore illo. Non modi quidem accusantium quod aperiam enim at amet. Debitis, saepe aut asperiores earum doloribus quia tempore numquam animi corporis voluptatem at consequatur perspiciatis dicta! Itaque culpa delectus nihil voluptates reiciendis sapiente molestias illum est veritatis libero, necessitatibus autem animi labore unde debitis harum dignissimos praesentium dolor excepturi optio exercitationem cum expedita qui laborum. Qui saepe neque voluptas porro. Alias, itaque voluptatem! Laborum id quos dolores molestiae praesentium quod tempora recusandae, officiis tenetur dolore quisquam. Ea, enim saepe, error sunt alias suscipit explicabo ducimus rem dolorum perspiciatis, voluptatibus provident! Cumque veritatis rem officiis voluptatem aperiam nesciunt quaerat minus delectus dolorem praesentium ab nam qui sint cupiditate porro assumenda, consectetur deserunt odio voluptas ipsam tempora error sit modi libero? Beatae, itaque obcaecati voluptates ducimus rem maxime veritatis harum laborum eveniet vero aperiam sapiente animi perspiciatis illo ad doloremque fugit ea! Delectus quidem possimus sit similique, in nisi rem, minus a magni aspernatur aperiam qui temporibus. Esse deserunt neque amet nobis, consequuntur illo voluptatem beatae suscipit vero qui, placeat cumque commodi totam exercitationem modi laborum magni? Et aperiam neque fuga delectus tempora? Ipsum cupiditate, pariatur laborum cumque quibusdam nemo. Placeat, quas doloribus sapiente magni cum facere. Iste incidunt exercitationem earum ad neque aspernatur amet, laudantium quae repudiandae soluta at!</div>

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
            <button className="ml-4">
              <svg className="fill-current" width="24" height="24" viewBox="0 0 477.88 477.88"><path d="M472.897 124.269a.892.892 0 01-.03-.031l-.017.017-68.267-68.267c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.713l39.151 39.151h-95.334c-65.948.075-119.391 53.518-119.467 119.467-.056 47.105-38.228 85.277-85.333 85.333h-102.4C7.641 324.072 0 331.713 0 341.139s7.641 17.067 17.067 17.067h102.4c65.948-.075 119.391-53.518 119.467-119.467.056-47.105 38.228-85.277 85.333-85.333h95.334l-39.134 39.134c-6.78 6.548-6.968 17.353-.419 24.132 6.548 6.78 17.353 6.968 24.132.419.142-.137.282-.277.419-.419l68.267-68.267c6.674-6.657 6.687-17.463.031-24.136z"/><path d="M472.897 329.069l-.03-.03-.017.017-68.267-68.267c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l39.151 39.151h-95.334a85.209 85.209 0 01-56.9-21.726c-7.081-6.222-17.864-5.525-24.086 1.555-6.14 6.988-5.553 17.605 1.319 23.874a119.28 119.28 0 0079.667 30.43h95.334l-39.134 39.134c-6.78 6.548-6.968 17.352-.42 24.132 6.548 6.78 17.352 6.968 24.132.42.142-.138.282-.277.42-.42l68.267-68.267c6.673-6.656 6.686-17.462.03-24.135zM199.134 149.702a119.28 119.28 0 00-79.667-30.43h-102.4C7.641 119.272 0 126.913 0 136.339s7.641 17.067 17.067 17.067h102.4a85.209 85.209 0 0156.9 21.726c7.081 6.222 17.864 5.525 24.086-1.555 6.14-6.989 5.553-17.606-1.319-23.875z"/></svg>
            </button>
            <button className="ml-4">
              {"<<"}
            </button>
            <button className="ml-4">
              <svg className="fill-current" width="24" height="24" viewBox="0 0 30.051 30.051">
                <path d="M19.982 14.438l-6.24-4.536a.752.752 0 00-1.195.607v9.069a.75.75 0 001.195.606l6.24-4.532a.747.747 0 000-1.214z"/>
                <path d="M15.026.002C6.726.002 0 6.728 0 15.028c0 8.297 6.726 15.021 15.026 15.021 8.298 0 15.025-6.725 15.025-15.021.001-8.3-6.727-15.026-15.025-15.026zm0 27.54c-6.912 0-12.516-5.601-12.516-12.514 0-6.91 5.604-12.518 12.516-12.518 6.911 0 12.514 5.607 12.514 12.518.001 6.913-5.603 12.514-12.514 12.514z"/>
              </svg>
            </button>

            <button className="ml-4">
              <svg className="fill-current" width="24" height="24" viewBox="0 0 512 512"><path d="M504.171 239.489l-234.667-192c-6.357-5.227-15.189-6.293-22.656-2.773-7.424 3.541-12.181 11.051-12.181 19.285v146.987L34.837 47.489c-6.379-5.227-15.189-6.293-22.656-2.773C4.757 48.257 0 55.767 0 64.001v384c0 8.235 4.757 15.744 12.181 19.285a21.667 21.667 0 009.152 2.048 21.29 21.29 0 0013.504-4.821l199.829-163.499v146.987c0 8.235 4.757 15.744 12.181 19.285a21.667 21.667 0 009.152 2.048 21.29 21.29 0 0013.504-4.821l234.667-192a21.35 21.35 0 007.829-16.512 21.35 21.35 0 00-7.828-16.512z"/></svg>
            </button>
            <button className="ml-4">
            random
            </button>
          </div>
          <div className="max-w-full mt-3 flex items-center justify-center">
            <div className="text-xs text-gray-500">1:20</div>
            <div className="bg-gray-500 rounded-lg w-full xl:w-200 h-1 ml-3"></div>
            <div className="ml-3 text-xs text-gray-500">3:21</div>
          </div>
        </div>
        <div className="bg-blue-300">Volume Control</div>
      </div>
    </div>
  );
}

export default App;
