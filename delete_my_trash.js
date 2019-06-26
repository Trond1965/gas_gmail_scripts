//
// update 
//
function delete_my_gmail_trash()
{
  var threads = GmailApp.search( "in:trash", 0, 500 );
  Logger.log(threads.length ); 
  return ;
  for ( var i = 0; i < threads.length; i++ ) {
      num_of_messages_in_the_thread = threads[i].getMessageCount();
      for ( var j = 0; j < num_of_messages_in_the_thread; j++ ) {
           Gmail.Users.Messages.batchDelete( {  "ids": [ threads[i].getMessages()[j].getId() ]}, "me" );
      }
  }
}

