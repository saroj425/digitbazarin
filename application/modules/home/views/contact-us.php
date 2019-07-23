<!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8" />
    <title>Inner-Page</title>
    <meta name="description" content="" />
    <meta name="author" content="" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <?php $this->load->view('template/headerlink'); ?>
  </head>
  <body class="page faq-page">
    <!-- Start Header -->
    <?php $this->load->view('template/headermenu');?>
    <?php $this->load->view('template/common-slider');?>
    <!-- End Content section	 -->
    <section class="content-page bg-white ">
        <div class=container>
            <div class=row>
                <div class=col-md-12>
                    <div class=map data-zoom=13 data-height=400 data-address=Konotop data-address-details="Our location"></div>
                </div>
            </div>
            <div class=row>
                <div class=col-md-12>
                    <div class=heading-title>
                        <h2>Send a Request</h2>
                        <p>Write to us a message.</p>
                    </div>
                </div>
                <div class=contact-form>
                    <form id=contact-form class=contact-form>
                        <div class=col-md-4>
                            <p><input type=text required="" name=name class=form-control placeholder=" Your name"></p>
                        </div>
                        <div class=col-md-4>
                            <p class=contact-form-email><input type=email required="" name=email class=form-control placeholder="Your email"></p>
                        </div>
                        <div class=col-md-4>
                            <p class=contact-form-email><input type=text name=website class=form-control placeholder="Your website"></p>
                        </div>
                        <div class=col-md-12>
                            <p class=contact-form-message>
                                <textarea rows=9 required="" name=message class=form-control placeholder="Your message"></textarea>
                            </p>
                            <p id=success class="hidden notify">Your message has been send</p>
                            <p id=error class="hidden notify">Error sending message</p>
                            <p class=contact-form-submit>
                                <input type=submit value="Send message" class="btn btn-blue btn-form">
                            </p>
                        </div>
                    </form>
                </div><!-- end contact section -->
            </div>
        </div>
    </section>
    <!-- Start footer -->
    <?php $this->load->view('template/commonpublication');?>
    <?php $this->load->view('template/common-section');?>
    <?php $this->load->view('template/footer');?>
    <?php $this->load->view('template/footerlink');?>
        <!--[if lt IE 9]>
        <script src="libs/html5shiv/es5-shim.min.js"></script>
        <script src="libs/html5shiv/html5shiv.min.js"></script>
        <script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
        <script src="libs/respond/respond.min.js"></script>
        <![endif]-->
        <!-- GOOGLE MAP -->
  </body>
</html>
