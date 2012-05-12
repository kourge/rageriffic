
CREATE TABLE IF NOT EXISTS `round` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `face` varchar(5) NOT NULL DEFAULT '',
  `ended` tinyint(1) NOT NULL DEFAULT '0',
  `winner` int(11) NOT NULL,

  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `participation` (
  `uid` int(11) NOT NULL DEFAULT '0',
  `rid` int(11) NOT NULL DEFAULT '0',
  `owner` tinyint(1) NOT NULL DEFAULT '0',
  `face` varchar(5) NOT NULL DEFAULT '',

  PRIMARY KEY (`uid`),
  KEY `rid` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `vote` (
  `rid` int(11) NOT NULL DEFAULT '0',
  `voter` int(11) NOT NULL DEFAULT '0',
  `votee` int(11) NOT NULL DEFAULT '0',

  PRIMARY KEY (`rid`),
  KEY `votee` (`votee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `preset` (
  `face` varchar(5) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',

  PRIMARY KEY (`face`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

