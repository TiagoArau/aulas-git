function percentage() {
  
      var num1 = document.getElementById("agua").value;
      
       var num2 = document.getElementById("salario").value;
    document.getElementById("%agua")
        .value = (num1 * 100) / num2 + "%";

        var num3 = document.getElementById("luz").value;
      
        var num4 = document.getElementById("salario").value;
     document.getElementById("%luz")
         .value = (num3 * 100) / num4 + "%";

         var num5 = document.getElementById("redemoveis").value;
      
        var num6 = document.getElementById("salario").value;
     document.getElementById("%redemoveis")
         .value = (num5 * 100) / num6 + "%";

         var num7 = document.getElementById("internet").value;
      
        var num8= document.getElementById("salario").value;
     document.getElementById("%internet")
         .value = (num7 * 100) / num8 + "%";

         var num9 = document.getElementById("condominio").value;
      
         var num10= document.getElementById("salario").value;
      document.getElementById("%condominio")
          .value = (num9 * 100) / num10 + "%";

          var num11 = document.getElementById("aluguel").value;
      
          var num12= document.getElementById("salario").value;
       document.getElementById("%aluguel")
           .value = (num11 * 100) / num12 + "%";

           var num13 = document.getElementById("conducao").value;
      
           var num14= document.getElementById("salario").value;
        document.getElementById("%conducao")
            .value = (num13 * 100) / num14 + "%";
}