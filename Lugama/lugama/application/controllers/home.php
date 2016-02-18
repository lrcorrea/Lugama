<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index(){
		$dados['titulo'] = ("Lugama");
		$this->load->view('elementos/html_header', $dados);
        $this->load->view('home', $dados);
        $this->load->view('elementos/html_footer', $dados);
	}
}
