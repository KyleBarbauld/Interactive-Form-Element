function selectDropDownMenu( typeSelected )
{
	var secondMenu = document.getElementById( "phoneCompany" );
	var selectSecondMenu = document.createElement( 'select' );
	selectSecondMenu.setAttribute( 'onchange', "SecondDropDownMenu( value );" );
	selectSecondMenu.setAttribute( 'id', "phoneCompanySelect" );

	if(document.getElementById('phoneCompanySelect'))
	{
		document.getElementById('phoneCompany').removeChild(document.getElementById('phoneCompanySelect'));
	}

	if(document.getElementById('pickedModel_select'))
	{
		document.getElementById('phoneModel').removeChild(document.getElementById('pickedModel_select'));
	}

	if(document.getElementById('phoneResult_select'))
	{
		document.getElementById('phoneResult').removeChild(document.getElementById('phoneResult_select'));
	}

//If selected carrier
 	if( typeSelected == "verizon" )
 	{
		var option = document.createElement( 'option' );
		option.setAttribute( "value", "blank" );
		var name = document.createTextNode( "Please select the brand" );
		option.appendChild( name );
		selectSecondMenu.appendChild( option );
		secondMenu.appendChild( selectSecondMenu );

 		var ArrayOptions = VerizonWirelessPhone;

 		var text = document.createTextNode( "Please select the brand" );

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{	
 			var secondOption = document.createElement( 'option' );
 			secondOption.setAttribute( "value", ArrayOptions[i] + "verizon" );
 			var secondName = document.createTextNode( ArrayOptions[i] );
 			secondOption.appendChild( secondName );
 			selectSecondMenu.appendChild( secondOption );
 		}
 		secondMenu.appendChild( selectSecondMenu );
 	}
 	else if( typeSelected == "att" )
 	{
 		var option = document.createElement( 'option' );
		option.setAttribute( "value", "blank" );
		var name = document.createTextNode( "Please select the brand" );
		option.appendChild( name );
		selectSecondMenu.appendChild( option );
		secondMenu.appendChild( selectSecondMenu );

 		var ArrayOptions = attPhone;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var secondOption = document.createElement( 'option' );
 			secondOption.setAttribute( "value", ArrayOptions[i] + "att" );
 			var secondName = document.createTextNode( ArrayOptions[i] );
 			secondOption.appendChild( secondName );
 			selectSecondMenu.appendChild( secondOption );
 		}
 		secondMenu.appendChild( selectSecondMenu );
 	}
 	else if( typeSelected == "tm" )
 	{
 		var option = document.createElement( 'option' );
		option.setAttribute( "value", "blank" );
		var name = document.createTextNode( "Please select the brand" );
		option.appendChild( name );
		selectSecondMenu.appendChild( option );
		secondMenu.appendChild( selectSecondMenu );

 		var ArrayOptions = tmobilePhone;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var secondOption = document.createElement( 'option' );
 			secondOption.setAttribute( "value", ArrayOptions[i] + "tm" );
 			var secondName = document.createTextNode( ArrayOptions[i] );
 			secondOption.appendChild( secondName );
 			selectSecondMenu.appendChild( secondOption );
 		}
 		secondMenu.appendChild( selectSecondMenu );
 	}
}

//select brand
function SecondDropDownMenu( pickedModel )
{
	if(document.getElementById('pickedModel_select'))
	{
		document.getElementById('phoneModel').removeChild(document.getElementById('pickedModel_select'));
	}

	if(document.getElementById('phoneResult_select'))
	{
		document.getElementById('phoneResult').removeChild(document.getElementById('phoneResult_select'));
	}

	var thirdMenu = document.getElementById( "phoneModel" );
	var thirdMenu_select = document.createElement( 'select' );
	thirdMenu_select.setAttribute( 'onchange', "selectedMenuThree( value );" );
	thirdMenu_select.setAttribute( 'id', "pickedModel_select" );

	var option = document.createElement( 'option' );
	option.setAttribute( "value", "blank" );
	var name = document.createTextNode( "Please select the cellphone" );
	option.appendChild( name );
	thirdMenu_select.appendChild( option );
	thirdMenu.appendChild( thirdMenu_select );

//Verizon
	if( pickedModel == "Appleverizon" )
 	{
 		var ArrayOptions = apple;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

 	if( pickedModel == "Samsungverizon" )
 	{
 		var ArrayOptions = samsung;
 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

 	if( pickedModel == "HTCverizon" )
 	{
 		var ArrayOptions = htc;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

// Att
	if( pickedModel == "Appleatt" )
 	{

 		var ArrayOptions = apple;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

 	if( pickedModel == "Nokiaatt" )
 	{

 		var ArrayOptions = nokia;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

 	if( pickedModel == "LGatt" )
 	{

 		var ArrayOptions = lg;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

// tmobile
	if( pickedModel == "Appletm" )
 	{

 		var ArrayOptions = apple;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

 	if( pickedModel == "Sonytm" )
 	{
 
 		var ArrayOptions = sony;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}

 	if( pickedModel == "Googletm" )
 	{

 		var ArrayOptions = google;

 		for( var i = 0; i < ArrayOptions.length; i++)
 		{
 			var thirdOption = document.createElement( 'option' );
 			thirdOption.setAttribute( "value", ArrayOptions[i] );
 			var thirdName = document.createTextNode( ArrayOptions[i] );
 			thirdOption.appendChild( thirdName );
 			thirdMenu_select.appendChild( thirdOption );
 		}
 		thirdMenu.appendChild( thirdMenu_select );
 	}
}

//List of phones
function selectedMenuThree( picked )
{

	var UpLoad = document.getElementById( "phoneResult" );
	var Load = document.createElement( 'div' );
	Load.setAttribute( 'id', "phoneResult_select" );
	Load.setAttribute( 'class', 'font' );

	if(document.getElementById('phoneResult_select'))
	{
		document.getElementById('phoneResult').removeChild(document.getElementById('phoneResult_select'));
	}

	
	if( picked == "iPhone 5S" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "iPhone 5S" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $199' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black, White and Gold' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/5s.jpg';
 		picture.alt = 'iPhone5s';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "iPhone 5C" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "iPhone 5C" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $99' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Green, White, Blue, Yellow and Red' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/5c.jpg';
 		picture.alt = 'iPhone5c';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "iPhone 4S" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "iPhone 4S" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: Free' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and White' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/4s.jpg';
 		picture.alt = 'iPhone4s';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "S4" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Galaxy S4" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $99' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and White' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/s4.jpg';
 		picture.alt = 'Samsung S4';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "Note 3" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Galaxy Note 3" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $299' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and White' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/note3.jpg';
 		picture.alt = 'Samsung Note 3';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "S5" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Galaxy S5" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: Unknown' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and Electric Blue' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/s5.jpg';
 		picture.alt = 'Samsung s5';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "One Max" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "One Max" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $199' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and White' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/onemax.jpg';
 		picture.alt = 'HTC One Max';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "One Mini" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "One mini" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: Free' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and White' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/onemini.jpg';
 		picture.alt = 'HTC One Mini';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "One" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "One" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $49' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and White' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/One.jpg';
 		picture.alt = 'HTC One';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "1020" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Lumia 1020" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $99' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black and Yellow' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/1020.jpg';
 		picture.alt = 'Lumia 1020';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "1520" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Lumia 1520" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $399' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Red' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/1520.jpg';
 		picture.alt = 'Lumia 1520';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "925" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Lumia 925" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $0.99' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/925.jpg';
 		picture.alt = 'Lumia 925';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "G Flex" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "G Flex" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $199' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/Flex.jpg';
 		picture.alt = 'LG G Flex';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "G2" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "G2" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $99' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/G2.jpg';
 		picture.alt = 'LG G2';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "Optimus G Pro" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Optimus G Pro" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $199' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/pro.jpg';
 		picture.alt = 'Optimus G Pro';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "Z1s" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Z1s" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $99' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black, White and Purple' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/z1.jpg';
 		picture.alt = 'Sony Z1s';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "Z Ultra" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "z Ultra" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $299' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black, White and Purple' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/ultra.jpg';
 		picture.alt = 'Sony Z Ultra';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "Nexus 5" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Nexus 5" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $199' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/5.jpg';
 		picture.alt = 'Nexus 5';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}

 	if( picked == "Nexus 7" )
 	{
 		var model = document.createElement( 'h2' );
 		var modelName = document.createTextNode( "Nexus 7" );
 		model.appendChild( modelName );

 		var cost = document.createElement( 'span' );
 		var costNumber = document.createTextNode( 'Cost: $299' );
 		cost.appendChild( costNumber );

 		var Color = document.createElement( 'p' );
 		var ColorText = document.createTextNode( 'Color: Black' );
 		Color.appendChild( ColorText );

 		var images = document.createElement( 'p' );
 		var picture = document.createElement( 'img' );
 		picture.src = 'images/7.jpg';
 		picture.alt = 'Nexus 7';
 		picture.setAttribute( 'height', '650' );
 		picture.setAttribute( 'width', '500' );
 		images.appendChild( picture );

 		Load.appendChild( model );
 		Load.appendChild( cost );
 		Load.appendChild( Color );
 		Load.appendChild( images );

 		UpLoad.appendChild(Load);
 	}
}