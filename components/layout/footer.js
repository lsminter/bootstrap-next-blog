export default function Footer () {
  return (
    <footer id='footer'>
      <div className='container-fluid bg-light py-3 mt-3'>
        <ul className="nav justify-content-center border-bottom border-black pb-3 mb-3">
          <ul>© Lucas Minter</ul>
          <a href="https://github.com/lsminter" className='icon-link icon-link-hover px-2 link-body-emphasis'>
            <svg className='bi' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/lucas-minter-67b9a097/" className='icon-link icon-link-hover px-2 link-body-emphasis'>
            <svg className='bi'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
            </svg>
          </a>
          <a href="https://twitter.com/lucasminter" className='icon-link icon-link-hover px-2 link-body-emphasis'>
            <svg className='bi' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"/>
            </svg>
          </a>
          <a href="https://egghead.io/q/resources-by-lucas-minter" className='icon-link icon-link-hover px-2 link-body-emphasis'>
            <svg className='bi' height="263" preserveAspectRatio="xMidYMid" viewBox="0 0 256 263" width="256" xmlns="http://www.w3.org/2000/svg">
              <path d="m128 262.399221c-14.4 0-28-3.190264-40.8-7.97566-12.8-5.582962-24-12.761056-32.8-23.129415-9.6-9.570792-16.8-20.736716-21.6-33.497773-1.6-4.785396-3.2-9.570792-4.8-15.153754h-.8l-.8-7.97566c-9.6-3.98783-16.8-13.558623-19.2-22.331849-3.2-11.165924-6.4-27.914811-7.2-43.068565 0-11.9634904 6.4-23.1294147 17.6-27.9148108 7.2-3.1902641 17.6-6.3805282 29.6-7.9756602 8-16.7488865 16.8-31.9026409 26.4-43.0685652 16.8-19.9391505 35.2-30.3075088 54.4-30.3075088s37.6 10.3683583 54.4 30.3075088c9.6 11.1659243 18.4 25.5221127 25.6 43.0685652 12 2.3926981 22.4 4.7853961 30.4 7.9756602 11.2 4.7853961 17.6 15.9513204 17.6 27.9148108-.8 17.546452-4.8 36.688037-7.2 43.866131-2.4 9.570792-9.6 19.141585-19.2 22.331849l-.8 7.97566h-.8c-.8 4.785396-2.4 10.368358-4.8 15.153754-4.8 12.761057-12 23.926981-21.6 33.497773-9.6 9.570793-20.8 17.546453-32.8 23.129415-12.8 4.785396-26.4 7.178094-40.8 7.178094z" fill="#fff"/><path d="m126.918924 19.2475113c45.461263 0 82.1493 97.3030547 82.1493 142.7643177s-36.688037 82.1493-82.1493 82.1493c-45.4612631 0-82.1493-36.688037-82.1493-82.1493s36.6880369-142.7643177 82.1493-142.7643177z" fill="#fcfbfa"/><path d="m231.400073 97.4089814-33.497773 11.9634906s4.785396 15.95132 5.582962 15.95132l33.497773-3.98783z" fill="#252526"/><path d="m23.2353414 97.4089814 33.4977729 11.9634906s-4.7853962 15.95132-5.5829622 15.95132l-33.4977729-3.98783z" fill="#252526"/><g fill="#e0e0e0"><path d="m92.6235853 95.0162833c8.7732257 0 10.3683587 7.1780947 10.3683587 8.7732267.797566 4.785396 1.595132 11.165924 2.392698 17.546452 0 1.595132 0 3.190264-.797566 4.785396-.797566-3.98783-.797566-7.97566-1.595132-11.96349 0-1.595132-2.392699-8.773226-10.3683587-8.773226-4.7853962 0-21.5342826.797566-37.4856031 3.190264.7975661-3.98783 2.3926981-7.178095 3.9878301-11.1659246 14.3561884-2.3926981 28.7123768-3.1902641 33.497773-2.3926981z"/><path d="m209.068224 158.023999c-29.509942-1.595132-55.032055-11.165924-60.615017-14.356188-4.785396-2.392698-10.368359-6.380529-11.963491-17.546453-.797566 12.761057 1.595132 23.926981 12.761057 29.509943.797566.797566 23.129414 11.165924 59.019885 13.558622v-7.178094c.797566-1.595132.797566-3.190264.797566-3.98783z"/><path d="m45.56719 158.023999c29.5099428-1.595132 55.032055-11.165924 60.615018-14.356188 4.785396-2.392698 10.368358-6.380529 11.96349-17.546453.797566 12.761057-1.595132 23.926981-12.761056 29.509943-.797566.797566-23.129415 11.165924-59.019886 13.558622v-7.178094c-.797566-1.595132-.797566-3.190264-.797566-3.98783z"/><path d="m161.214263 95.0162833c-8.773226 0-10.368358 7.1780947-10.368358 8.7732267-.797566 4.785396-1.595132 11.165924-2.392698 17.546452 0 1.595132 0 3.190264.797566 4.785396.797566-3.98783.797566-7.97566 1.595132-11.96349 0-1.595132 2.392698-8.773226 10.368358-8.773226 4.785396 0 21.534283.797566 37.485603 3.190264-.797566-3.98783-2.392698-7.178095-3.98783-11.1659246-14.356188-2.3926981-28.712377-3.1902641-33.497773-2.3926981z"/></g><path d="m55.1379822 85.4454911c7.9756602-19.1415846 17.5464525-36.688037 27.9148108-48.6515274 13.5586224-16.7488864 28.712377-25.5221127 43.866131-25.5221127 15.153755 0 29.509943 8.7732263 43.866131 25.5221127 10.368359 12.7610564 19.939151 29.5099428 27.914811 48.6515274v.797566h-.797566c-3.190264 0-4.785396-.797566-7.97566-.797566-8.773226-21.5342826-24.724547-48.6515274-44.663697-60.6150177-6.380528-3.1902641-11.963491-5.5829621-18.344019-5.5829621s-11.96349 1.595132-18.344018 5.5829621c-19.9391509 11.1659243-35.0929053 39.0807351-44.6636975 60.6150177-3.1902641 0-4.7853962.797566-7.9756602.797566h-.7975661z" fill="#56555c"/><path d="m209.86579 147.655641h-6.380528-.797566v-.797566c-1.595132-15.951321-6.380528-33.497773-12.761056-51.0442257l-.797566-1.595132h1.595132c2.392698 0 4.785396.797566 7.178094.797566h.797566v.797566c5.582962 17.5464527 10.368358 35.8904707 11.96349 51.0442257v.797566z" fill="#56555c"/><path d="m202.687696 108.574906c-1.595132-3.98783-2.392698-7.975661-3.98783-11.9634906v-.7975661h-.797566c-2.392698-.797566-4.785396-.797566-7.178094-.797566h-1.595132l.797566 1.5951321c1.595132 3.9878296 2.392698 7.9756606 3.98783 11.9634906 3.98783-.797566 6.380528-.797566 8.773226 0z" fill="#252526"/><path d="m43.9720579 146.060509c1.5951321-15.153755 6.3805282-33.497773 11.9634904-51.0442257v-.797566h.797566c2.392698 0 4.7853961-.797566 7.1780942-.797566h1.595132l-.797566 1.595132c-6.3805282 17.5464527-10.3683583 35.8904707-12.7610564 51.0442257v.797566h-.797566-6.3805281-.7975661z" fill="#56555c"/><path d="m56.7331143 95.0162833c-2.3926981 4.7853961-3.1902641 8.7732267-4.7853962 12.7610567 3.9878302-.797566 5.5829622-.797566 8.7732263-.797566 1.595132-3.98783 2.392698-7.9756606 3.9878301-11.9634907l.797566-1.595132h-1.595132c-2.3926981.797566-4.7853962 1.595132-7.1780942 1.595132z" fill="#252526"/><path d="m126.918924 251.339224c-11.96349 0-23.92698-2.392699-35.0929048-7.178095-11.1659243-4.785396-20.7367165-11.165924-28.7123768-19.93915-7.9756602-8.773226-14.3561883-18.344019-19.1415845-29.509943-4.7853961-11.165924-6.3805281-23.926981-6.3805281-36.688037v-.797566h.797566 7.1780942.797566v.797566c-.797566 11.96349 1.595132 22.331849 5.5829621 33.497773 3.9878302 10.368358 9.5707923 19.141584 16.7488865 27.117245 7.1780942 7.97566 16.7488865 14.356188 26.3196787 18.344018 10.3683587 4.785396 20.7367167 6.380528 31.9026407 6.380528s22.331849-2.392698 31.902641-6.380528 19.141585-10.368358 26.319679-18.344018c7.178094-7.975661 13.558622-16.748887 16.748886-27.117245 3.98783-10.368358 5.582962-21.534283 5.582962-33.497773v-.797566h.797566 7.178095.797566v.797566c.797566 12.761056-1.595132 24.724547-6.380529 36.688037-3.98783 11.165924-10.368358 20.736717-19.141584 29.509943-7.97566 8.773226-18.344019 15.153754-28.712377 19.93915-10.368358 3.98783-22.331848 7.178095-35.092905 7.178095z" fill="#56555c"/><path d="m46.364756 168.392357v-10.368358-.797566h-.797566-7.1780942-.797566v.797566 10.368358z" fill="#252526"/><path d="m216.246319 157.226433h-7.178095-.797566v.797566 10.368358h7.975661z" fill="#252526"/><path d="m221.031715 164.404527c-18.344019 0-35.092905-4.785396-51.044226-8.773226-7.97566-2.392698-15.153754-6.380528-20.736716-8.773226v-.797566c-13.558623-6.380528-14.356189-20.736717-13.558623-32.700207 0-3.190264-.797566-7.178094-3.98783-9.570792-1.595132-.797566-3.190264-1.595132-4.785396-1.595132s-3.98783.797566-4.785396 1.595132c-3.190264 2.392698-3.98783 6.380528-3.98783 9.570792 1.595132 11.96349.797566 25.522113-13.558622 31.902641-5.5829626 2.392698-12.7610568 7.97566-20.736717 10.368358-15.9513204 3.98783-32.7002069 8.773226-51.0442254 8.773226-7.1780942 0-13.5586223-7.178094-15.1537544-14.356188-2.3926981-10.368358-6.3805282-27.117245-6.3805282-41.473433 0-5.582962 3.1902641-11.9634906 8.7732263-14.3561887 19.1415845-8.7732262 58.2223196-11.9634903 74.971206-11.9634903 6.3805277 0 11.1659247 2.392698 15.1537547 6.3805281 5.582962-2.392698 11.165924-3.9878301 16.748886-3.9878301s11.165924 1.5951321 16.748887 3.9878301c3.190264-3.190264 7.97566-6.3805281 15.153754-6.3805281 9.570792 0 52.639357 1.595132 74.971206 11.1659243 5.582962 2.392698 8.773226 7.9756597 8.773226 13.5586227-.797566 14.356188-3.98783 32.700207-6.380528 43.068565-1.595132 7.178094-7.97566 14.356188-15.153754 14.356188zm-59.817452-69.3882437c-7.97566 0-9.570792 7.1780947-10.368358 7.9756607-.797566 3.98783-1.595132 10.368358-2.392698 17.546452 0 6.380528 2.392698 11.165924 7.178094 13.558622 17.546452 7.975661 38.283169 11.963491 62.21015 11.963491 1.595132 0 3.190264-1.595132 3.98783-3.190264 2.392698-8.773227 5.582962-22.331849 5.582962-35.092905 0-.797566-.797566-2.392698-1.595132-2.392698-15.153755-7.9756606-51.044226-10.3683587-64.602848-10.3683587zm-133.9910915 10.3683587c-.797566.797566-1.5951321 1.595132-1.5951321 2.392698 0 12.761056 3.1902641 26.319678 5.5829622 35.092905.797566 1.595132 2.392698 3.190264 3.9878301 3.190264 24.7245467 0 44.6636972-3.98783 62.2101497-11.963491 4.7853966-2.392698 7.1780946-7.178094 7.1780946-13.558622 0-5.582962-.797566-11.165924-2.392698-17.546452 0-1.595133-1.595133-7.9756607-10.3683588-7.9756607-6.3805281 0-45.4612632 1.5951321-64.6028477 10.3683587z" fill="#252526"/>
            </svg>
          </a>
        </ul>
      </div>
    </footer>
  )
}