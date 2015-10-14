var firstFilterSentence = "Tidak diperbolehkan posting dari ";
var secondFilterSentece = " silahkan baca halaman Info untuk domain-domain yang diperbolehkan";

function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}

function filterUrl(url){
  domain = extractDomain(url)
  if(domain.match(/youtube.com*/)){
    return true;
  }else if(domain.match(/facebook.com*/)){
    return true;
  }else if(domain.match(/vine.co*/)){
    return true;
  }else if(domain.match(/instagram.com*/)){
    return true;
  }else if(domain.match(/twitter.com*/)){
    return true;
  }else if(domain.match(/vidio.com*/)){
    return true;
  }else if(domain.match(/vimeo.com*/)){
    return true;
  }else if(domain.match(/screen.yahoo.com*/)){
    return true;
  }else if(domain.match(/dailymotion.com*/)){
    return true;
  }else if(domain.match(/liveleak.com*/)){
    return true;
  }else if(domain.match(/metacafe.com*/)){
    return true;
  }else if(domain.match(/vid.me*/)){
    return true;
  }else if(domain.match(/video.kompas.com*/)){
    return true;
  }else if(domain.match(/tv.detik.com*/)){
    return true;
  }else {
    return false;
  }

}

function fileterPostUrlOnServer(post) {
  is_ok = filterUrl(post.url)
  if(is_ok){
    return post;
  }else{
    console.log(alert(firstFilterSentence + domain +
      secondFilterSentece));
    return;
  }
}

function fileterPostUrlOnClient(post) {
  is_ok = filterUrl(post.url);
  if(is_ok){
    return post;
  }else{
    Messages.flash(firstFilterSentence + post.url +
      secondFilterSentece ,'error');
    return;
  }
}

function fileterPostUrlEditOnServer(modifier, post){
  is_ok = filterUrl(modifier.$set.url)
  if(is_ok){
    return modifier;
  }else{
    console.log(alert(firstFilterSentence + modifier.$set.url +
      secondFilterSentece));
    return;
  }
}

function fileterPostUrlEditOnClient(modifier, post){
  is_ok = filterUrl(modifier.$set.url);
  if(is_ok){
    return modifier;
  }else{
    Messages.flash(firstFilterSentence + modifier.$set.url +
      secondFilterSentece ,'error');
    return;
  }
}

Telescope.callbacks.add("postSubmitClient", fileterPostUrlOnClient);
Telescope.callbacks.add("postSubmit", fileterPostUrlOnServer);
Telescope.callbacks.add("postEdit", fileterPostUrlEditOnServer);
Telescope.callbacks.add("postEditClient", fileterPostUrlEditOnClient);
