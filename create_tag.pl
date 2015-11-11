#!/usr/bin/perl

use Data::Dumper;
use strict;      
use warnings;

# url para requisitar a versão anterior no bower
my $url = "https://img.shields.io/bower/v/oobj-directives.json";

#requisita a versão anterior no bower
my $json = `curl $url`;

#checa se o json retornado contem o atributo value
if($json =~/"value": ?"v(.*)"/) {
        #quebra o valor do atributo "value" em um array pelos "."
	my ($major, $minor, $build) = split(/\./, $1);
        #une novamente incrementando a ultima parte da versão (num do build)
	my $versao = "v" . join('.', $major, $minor, ++$build);

        commitarVersao($versao);
} else {
	print "Impossível determinar versão para gerar a tag.";
}

sub commitarVersao {
	my ($versao) = @_;
	my $apiKey = "ae012ae5ac7e12ee025ed8e1e34e24a576fab531";
	my $repoUrl = "https://$apiKey\@github.com/oobj/oobj-directives";
	`git config --global user.name "oobj-ci"`;
	`git config --global user.email "cd\@oobj.com.br"`;
	`git tag $versao -a -m "Gerando versão $versao para publicação no bower."`;
	`git push --tags $repoUrl`;
}

