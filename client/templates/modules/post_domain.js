
Template.post_domain.helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    str_domain = a.hostname;
    return str_domain.substring(4);
  }
});
