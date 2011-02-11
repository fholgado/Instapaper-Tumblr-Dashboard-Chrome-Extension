$(document).ready(function(){
  $('li.post').each(function(){
    if ($(this).hasClass('regular')){
      var post_link = encodeURIComponent($('a.permalink', this).attr('href'));
      var post_author = encodeURIComponent($('div.post_info a', this).text());
      var post_title = encodeURIComponent($('div.post_title', this).text());
      var read_later_link = "\x3Ciframe border=\"0\" scrolling=\"no\" width=\"78\" height=\"17\" allowtransparency=\"true\" frameborder=\"0\"\n style=\"margin-bottom: -5px; z-index: 1338; border: 0px; background-color: transparent; overflow: hidden;\"\n src=\"http:\x2F\x2Fwww.instapaper.com\x2Fe2?url="+post_link+"\&title="+post_title+"\&description="+post_author+"\"\n\x3E\x3C\x2Fiframe\x3E";
    $('div.post_controls', this).prepend(read_later_link);
    }
    if($(this).hasClass('link')){
      post_link = encodeURIComponent($('div.post_title a', this).attr('href'));
      post_author = encodeURIComponent($('div.post_info a', this).text());
      post_title = encodeURIComponent($('div.post_title', this).text());
      read_later_link = "\x3Ciframe border=\"0\" scrolling=\"no\" width=\"78\" height=\"17\" allowtransparency=\"true\" frameborder=\"0\"\n style=\"margin-bottom: -5px; z-index: 1338; border: 0px; background-color: transparent; overflow: hidden;\"\n src=\"http:\x2F\x2Fwww.instapaper.com\x2Fe2?url="+post_link+"\&title="+post_title+"\&description="+post_author+"\"\n\x3E\x3C\x2Fiframe\x3E";
    $('div.post_controls', this).prepend(read_later_link);
    }
  });
});
