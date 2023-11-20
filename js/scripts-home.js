$("#portfolio .box-flex .project").click(function () {
  var clickType = $(this).data("click")
  var nomeProjeto = projetos[clickType].nomeProjeto
  var urlImg = projetos[clickType].imgProjeto

  $("#nome-projeto").text(nomeProjeto)

  $("#img-projeto").attr("src", urlImg)
})
