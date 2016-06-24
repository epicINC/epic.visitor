'use strict';


function test()
{
  if (!new.target) console.log('not new');
}


console.log(Proxy);