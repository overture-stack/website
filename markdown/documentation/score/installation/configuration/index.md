---
title: Configuring Score
---

There are three primary requirements to successfully configure Score:

1. [Setup your spring run profiles](/documentation/score/installation/configuration/profiles) 
2. [Integrate Score with a Song Server](/documentation/score/installation/configuration/song) 
3. [Integration Score with your Object Storage provider](/documentation/score/installation/configuration/object-storage)

Depending on your setup other bootstrap properties may require additional minor configurations. For example, if you are using a third-party solution to manage authentication secrets you will need to adjust specific properties, more information can be found in the [Other Bootstrap Properties section](/documentation/score/installation/configuration/bootstrap).

All configurations are managed within the same **application.properties** file, located in the following directory **score-server-[version]/conf/application.properties**.