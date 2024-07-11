        const wasPageRefreshed = sessionStorage.getItem('refreshToken') == 'true';
        const tabCount = Number(localStorage.getItem('tabCount'));
        let isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
        const isOsSettingDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        
        
       /* if(tabCount == 0 && !wasPageRefreshed){
          if (isOsSettingDarkTheme) {
            isDarkTheme = true;
           // document.body.classList.add('gf-dark-theme');
          } else {
            isDarkTheme = false;
           // document.body.classList.remove('gf-dark-theme');
          }
        } else {
          if (isDarkTheme) {
            //document.body.classList.add('gf-dark-theme');
          } else {
           // document.body.classList.remove('gf-dark-theme');
          }
        }
      window['CONFIG'] = 'WyJjb25maWciLG51bGwsIi8iLCIvIiwiLy8iLCJmb250cy5nb29nbGVhcGlzLmNvbSIsMCwxLDEsWzk0Mzc4NTE1LDk0ODE2MjIyXSwwLDAsMSwiMTAyNTY5NSIsW10sMzAsImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pL3Nob3J0LXRlcm0vcmVsZWFzZS8iXQ\x3d\x3d';
      if ('serviceWorker' in navigator) {
        (function() {
          navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (let registration of registrations) {
              registration.unregister();
            }
          });
        })();
      }
*/

export  {  isOsSettingDarkTheme   }