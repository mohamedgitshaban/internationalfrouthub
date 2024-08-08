<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
            <style media="all" type="text/css">
                /* -------------------------------------
                GLOBAL RESETS
            ------------------------------------- */

            @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

            html {
              font-family: 'Montserrat', Arial, sans-serif;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }

            body {
              background: #F2F3EB;
            }

            button {
              overflow: visible;
            }

            button, select {
              text-transform: none;
            }

            button, input, select, textarea {
              color: #5A5A5A;
              font: inherit;
              margin: 0;
            }

            input {
              line-height: normal;
            }

            textarea {
              overflow: auto;
            }

            #container {
              border: solid 3px #149D80;
              max-width: 768px;
              margin: 60px auto;
              position: relative;
            }


            h1 {
              color: #474544;
              font-size: 32px;
              font-weight: 700;
              letter-spacing: 7px;
              text-align: center;
              text-transform: uppercase;
            }

            .underline {
              border-bottom: solid 2px #474544;
              margin: -0.512em auto;
              width: 80px;
            }

            .icon_wrapper {
              margin: 50px auto 0;
              width: 100%;
            }

            .icon {
              display: block;
              fill: #474544;
              height: 50px;
              margin: 0 auto;
              width: 50px;
            }




            #form_button {
              background: none;
              border: solid 2px #474544;
              color: #474544;
              cursor: pointer;
              display: inline-block;
              font-family: 'Helvetica', Arial, sans-serif;
              font-size: 0.875em;
              font-weight: bold;
              text-decoration: none;
              outline: none;
              padding: 20px 35px;
              text-transform: uppercase;
              -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                -ms-transition: all 0.3s;
                -o-transition: all 0.3s;
                transition: all 0.3s;
            }

            .btn {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom:10px;
            }
            p {
              padding-inline: 30px;
              font-weight: 600;
              line-height: 22px;
              color: #474544;
              letter-spacing: 2px;
            }
            p:first-of-type {
              padding-top: 40px;
            }
            h2 {
              color:#474544;
              text-align: center;
              text-transform: uppercase;
              border-color: #149D80;

            }
            #form_button:hover {
              background: #149D80;
              border-color: #149D80;
              color: #F2F3EB;
            }

            @media screen and (max-width: 768px) {
              #container {
                margin: 20px auto;
                width: 95%;
              }
            }

            @media screen and (max-width: 480px) {
              h1 {
                font-size: 26px;
              }

              .underline {
                width: 68px;
              }

              #form_button {
                padding: 15px 25px;
              }
            }

            @media screen and (max-width: 420px) {
              h1 {
                font-size: 18px;
              }

              .icon {
                height: 35px;
                width: 35px;
              }

              .underline {
                width: 53px;
              }

              input[type='text'], [type='email'], select, textarea {
                font-size: 0.875em;
              }
            }
                </style>
    <title>New Form Submission</title>
</head>
<body>
    <div id="container">
        <h1>Your submission is received and we will contact you soon </h1>
        <div class="underline">
        </div>
        <div class="icon_wrapper">
            <img src="{{ asset('logo.svg') }}"/>
        </div>
        <h2>International Fruit Hub</h2>
        <div class="underline">
        </div>
          <div class="para">
            <p>
               Name :  {{$data['name']}}<br/>
               Email :  {{$data['email']}}
            </p>
            <p>
                {{$data['message']}}
            </p>

            </div>
            <ul class="footer-nav">
                <li> <a href="#">Terms and Conditions </a> </li>
                <li> <a href="#"> Privacy Policy </a> </li>
                <li> <a href="#"> FAQ </a> </li>
                <li> <a href="#"> Contact Us </a> </li>
              </ul>
              <div class="thank-you-copy">
                <p> International Fruit Hub &copy; 2024 All Rights Reserved </p>
              </div>

      </div>
</body>

</html>
