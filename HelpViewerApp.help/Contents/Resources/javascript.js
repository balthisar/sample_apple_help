if ("HelpViewer" in window && "showTOCButton" in window.HelpViewer)
{
  window.setTimeout(function () 
  {
//       window.HelpViewer.showTOCButton(true, onCheck, onUncheck);
//       window.HelpViewer.setTOCButton(true);

      // This is in the private headers *newer* than 10.10 -- starting when?
      // It still seems to work just like showTOCButton, with the same
      // callbacks.
      window.HelpViewer.setSidebarButtonEnabled(true, onCheck, onUncheck);
  }, 100);
}

function toggleNavigation()
{
  var element = document.getElementById("nav");
  element.classList.toggle("hidden_thing");
}

function onCheck()
{
  addTextToId( 'enumerated', 'onCheck' );
  toggleNavigation();
}

function onUncheck()
{
  addTextToId( 'enumerated', 'onUncheck' );
  toggleNavigation();
}


function addTextToId(itemId, text)
{
  var element = document.createElement("p");
  element.appendChild(document.createTextNode( text ));
  document.getElementById( itemId ).appendChild( element );
  
}


function do_enum( object, dest )
{
  for (var key in object) 
  {
    if ( key != 'localStorage' )
    {
      text = key + " -> " + object[key];
      addTextToId( dest, text );
    }
  }
}

function enumerate()
 {
  var dest = 'enumerated'

  do_enum( window, dest )

  if ("HelpViewer" in window && "showTOCButton" in window.HelpViewer)
  {
    addTextToId( dest, 'HelpViewer is in the window.' );
    do_enum( window.HelpViewer, dest )
    var result = Object.getOwnPropertyNames(window.HelpViewer);
    addTextToId( dest, result );
    addTextToId( dest, 'Done dumping HelpViewer.' );
  } else {
    addTextToId( dest, 'HelpViewer is NOT the window.' );
  }

}


function testRandom()
{
  var dest = 'enumerated'
    addTextToId( dest, 'Performing testRandom now.' );

//     window.HelpViewer.setSidebarExpanded(true);
//     window.HelpViewer.expandContentSidebar();

// - (void)collapseContentSidebar; // not a function
// - (void)expandContentSidebar;   // not a function
// - (void)updateContentSidebar;   // not a function
// - (BOOL)sidebarExpanded;
// - (void)setSidebarExpanded:(BOOL)arg1;

  addTextToId( dest, 'will collapseContentSidebar' );
  window.HelpViewer.setSidebarExpanded(true);
  addTextToId( dest, 'did collapseContentSidebar' );

  if ( window.HelpViewer.sidebarExpanded) {
    addTextToId( dest, 'sidebar is expanded.' );
  } else {
    addTextToId( dest, 'sidebar is NOT expanded.' );
  }

  if ( window.HelpViewer._isWebAppTOCExpanded) {
    addTextToId( dest, '_isWebAppTOCExpanded is expanded.' );
  } else {
    addTextToId( dest, '_isWebAppTOCExpanded is NOT expanded.' );
  }
    
}
