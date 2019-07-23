<?php defined('BASEPATH') OR exit('No direct script access allowed');
  class Home extends MX_Controller{
  	function index($err='',$msg=''){
      $data['err'] = $err;
      $data['msg'] = $msg;
  		$this->load->view('index',$data);
    }
    function contacu_us($err='',$msg=''){
      $data['err']= $err;
      $data['msg']= $msg;
      $this->load->view('contact-us',$data);
    }
  }
