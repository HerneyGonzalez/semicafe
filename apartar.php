<?php
  $destino= "ferneyvallejogonzalez@gmail.com";
  $Nombre=$_POST["Nombre"];
  $Email=$_POST["Correo"];
  $Telefono=$_POST["Telefono"];
  $Direccion=$_POST["Direccion"];
  $Variedad=$_POST["Variedad"];
  $Cantidad=$_POST["Cantidad"];
  $contenido= "Nombre:" .$Nombre . "\nE-mail:" .$Email.   "\nTelefono:" .$Telefono. "\nDireccion" .$Direccion.   "\nVariedad:" .$Variedad. "\nCantidad:" .$Cantidad;
  mail($destino, "Apartado",$contenido);
  header("location:gracias.html");
?>