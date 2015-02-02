


/*
	ok so what needs to happen is that:
		in the database, taxa are stored with all of the information needed to generate the visualization:

			something to scale with--species diversity? that sounds good. maybe age? ideally you can tweak these for the visualization.

			whatever additional trait data to display (optional really)
				-publication mentions,
				-hypotheses about consciousness...

			then just hierarchy of relations i guess.

			so then you need to write a script to generate a json to power the d3 visualization based on info from the db. not too hard.

				so maybe it shows the supertaxon and sisters and children of the target taxon, that's all; clicking on a taxon will recenter the display on that taxon, with the info about publications and shit off in a separate display tab on the right.


*/
var AnimalTree = {
  "name": "Animals",
  "species-diversity": "unknown",
  "species-diversity-source": "unknown",
  "taxon-age": "unknown",
  "taxon-age-source": "unknown",
  "children": [
  	{
  	  "name": "Radiata",
  	  "species-diversity": "unknown",
  	  "species-diversity-source": "unknown",
  	  "taxon-age": "unknown",
  	  "taxon-age-source": "unknown",
  	  "children": [
        {
          "name": "Ctenaphora",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },
        {
          "name": "Cnidaria",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        }
      ],
  	},
  	{
  	  "name": "Bilateria",
  	  "species-diversity": "unknown",
  	  "species-diversity-source": "unknown",
  	  "taxon-age": "unknown",
  	  "taxon-age-source": "unknown",
  	  "children": [
        {
          "name": "Chaetognatha",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },
        {
          "name": "Acoelamorpha",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },
        {
          "name": "Xenoturbellida",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },

        {
          "name": "Tardigrades",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },
        {
          "name": "Platyhelmenthes",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },
        {
          "name": "Bryozoa",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [],
        },
        {
          "name": "Echinodermata",
          "species-diversity": 7000,
          "species-diversity-source": "http://en.wikipedia.org/wiki/Echinoderm#Taxonomy_and_evolution",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [

            {
              "name": "Starfish (Asteroidea)",
              "species-diversity": 1500,
              "species-diversity-source": "http://en.wikipedia.org/wiki/Starfish",
              "taxon-age": "unknown",
              "taxon-age-source": "unknown",
            "children": [],
            },

            {
              "name": "Crinoidea",
              "species-diversity": 600,
              "species-diversity-source": "http://en.wikipedia.org/wiki/Crinoid",
              "taxon-age": "unknown",
              "taxon-age-source": "unknown",
              "children": [],
            }



          ],
        },

        {
          "name": "Nematoida",
          "species-diversity": "unknown",
          "species-diversity-source": "unknown",
          "taxon-age": "unknown",
          "taxon-age-source": "unknown",
          "children": [
            {
              "name": "Nematoda",
              "species-diversity": "unknown",
              "species-diversity-source": "unknown",
              "taxon-age": "unknown",
              "taxon-age-source": "unknown",
              "children": [],
            },
            {
              "name": "Nematomorpha",
              "species-diversity": "unknown",
              "species-diversity-source": "unknown",
              "taxon-age": "unknown",
              "taxon-age-source": "unknown",
              "children": [],
            }


          ],
        },


  	  	{
  	  	  "name": "Arthropods",
  	  	  "species-diversity": "unknown",
  	  	  "species-diversity-source": "unknown",
  	  	  "taxon-age": "unknown",
  	  	  "taxon-age-source": "unknown",
  	  	  "children": [

  	  	  	{
  	  	  	  "name": "Spiders (Aranae)",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [
                {
                  "name": "Mesothelae",
                  "species-diversity": 87,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Spider#Taxonomy",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Mygalomorphae",
                  "species-diversity": 2600,
                  "species-diversity-source": "unknown",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Araneomorphae",
                  "species-diversity": 37000,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Spider#Taxonomy",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [
                    {
                      "name": "Orb-Weaver Spiders (Araneidae)",
                      "species-diversity": 10000,
                      "species-diversity-source": "http://en.wikipedia.org/wiki/Orb-weaver_spider",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    },
                    {
                      "name": "Cobweb Spiders (Theridiidae)",
                      "species-diversity": 2200,
                      "species-diversity-source": "http://en.wikipedia.org/wiki/Theridiidae",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    },
                    {
                      "name": "Crab Spiders (Thomisidae)",
                      "species-diversity": "unknown",
                      "species-diversity-source": "unknown",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    },
                    {
                      "name": "Jumping Spiders (Salticidae)",
                      "species-diversity": 5000,
                      "species-diversity-source": "http://en.wikipedia.org/wiki/Jumping_spider",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    },
                    {
                      "name": "Wolf Spiders (Lycosidae)",
                      "species-diversity": "unknown",
                      "species-diversity-source": "unknown",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    },
                    {
                      "name": "Huntsman Spiders (Sparassidae)",
                      "species-diversity": "unknown",
                      "species-diversity-source": "unknown",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    }
                  ],
                }

              ],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Insects",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [
                {
                  "name": "Beetles (Coleoptera)",
                  "species-diversity": 400000,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Beetle#Overview",
                  "taxon-age": 318,
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Butterflies and Moths (Lepidoptera)",
                  "species-diversity": 174000,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Lepidoptera",
                  "taxon-age": 190,
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Flies (Diptera)",
                  "species-diversity": 120000,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Fly",
                  "taxon-age": 240,
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Hymenoptera",
                  "species-diversity": 150000,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Hymenoptera",
                  "taxon-age": 251,
                  "taxon-age-source": "unknown",
                  "children": [
                    {
                      "name": "Symphyta",
                      "species-diversity": "unknown",
                      "species-diversity-source": "unknown",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    },
                    {
                      "name": "Wasps and relatives (Apocrita)",
                      "species-diversity": "unknown",
                      "species-diversity-source": "unknown",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [
                        {
                          "name": "Bees (Anthophila)",
                          "species-diversity": "unknown",
                          "species-diversity-source": "unknown",
                          "taxon-age": "unknown",
                          "taxon-age-source": "unknown",
                          "children": [],
                        },
                        {
                          "name": "Ants (Formicidae)",
                          "species-diversity": "unknown",
                          "species-diversity-source": "unknown",
                          "taxon-age": "unknown",
                          "taxon-age-source": "unknown",
                          "children": [],
                        }


                      ],
                    }




                  ],
                }






              ],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Crustacea",
  	  	  	  "species-diversity": 67000,
  	  	  	  "species-diversity-source": "http://en.wikipedia.org/wiki/Crustacean",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [
                {
                  "name": "Branchiopoda",
                  "species-diversity": "unknown",
                  "species-diversity-source": "unknown",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Remipedia",
                  "species-diversity": "unknown",
                  "species-diversity-source": "unknown",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Cephalocarida",
                  "species-diversity": "unknown",
                  "species-diversity-source": "unknown",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Maxillopoda",
                  "species-diversity": "unknown",
                  "species-diversity-source": "unknown",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [
                    {
                      "name": "Barnacles",
                      "species-diversity": 1220,
                      "species-diversity-source": "http://en.wikipedia.org/wiki/Barnacle",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    },
                    {
                      "name": "Copepods",
                      "species-diversity": 13000,
                      "species-diversity-source": "http://en.wikipedia.org/wiki/Copepod",
                      "taxon-age": "unknown",
                      "taxon-age-source": "unknown",
                      "children": [],
                    }
                  ],
                },
                {
                  "name": "Ostracoda",
                  "species-diversity": 70000,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Ostracod",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [],
                },
                {
                  "name": "Malacostraca",
                  "species-diversity": 40000,
                  "species-diversity-source": "http://en.wikipedia.org/wiki/Malacostraca",
                  "taxon-age": "unknown",
                  "taxon-age-source": "unknown",
                  "children": [


                  ],
                }




              ],
  	  	  	}



  	  	  ],
  	  	},
  	  	{
  	  	  "name": "Molluscs",
  	  	  "species-diversity": "unknown",
  	  	  "species-diversity-source": "unknown",
  	  	  "taxon-age": "unknown",
  	  	  "taxon-age-source": "unknown",
  	  	  "children": [
  	  	  	{
  	  	  	  "name": "Cephalopods",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Gastropods",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Bivalves",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	}


  	  	  ],
  	  	},
  	  	{
  	  	  "name": "Vertebrates",
  	  	  "species-diversity": "unknown",
  	  	  "species-diversity-source": "unknown",
  	  	  "taxon-age": "unknown",
  	  	  "taxon-age-source": "unknown",
  	  	  "children": [
  	  	  	{
  	  	  	  "name": "Tetrapods",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [
  	  	  	  	{
  	  	  	  	  "name": "Amphibians",
  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  "children": [],
  	  	  	  	},
  	  	  	  	{
  	  	  	  	  "name": "Amniotes",
  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  "children": [
  	  	  	  	  	{
  	  	  	  	  	  "name": "Mammals",
  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  "children": [
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Elephants",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},
                        {
                          "name": "Bats",
                          "species-diversity": "unknown",
                          "species-diversity-source": "unknown",
                          "taxon-age": "unknown",
                          "taxon-age-source": "unknown",
                          "children": [],
                        },

  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Primates",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [
                            {
                              "name": "Platyrrhini (New World Monkeys)",
                              "species-diversity": "unknown",
                              "species-diversity-source": "unknown",
                              "taxon-age": "unknown",
                              "taxon-age-source": "unknown",
                              "children": [],
                            },
                            {
                              "name": "Catarrhini",
                              "species-diversity": "unknown",
                              "species-diversity-source": "unknown",
                              "taxon-age": "unknown",
                              "taxon-age-source": "unknown",
                              "children": [
                                {
                                  "name": "Cercopithecoidea (Old World Monkeys)",
                                  "species-diversity": "unknown",
                                  "species-diversity-source": "unknown",
                                  "taxon-age": "unknown",
                                  "taxon-age-source": "unknown",
                                  "children": [],
                                },
                                {
                                  "name": "Hominidae",
                                  "species-diversity": "unknown",
                                  "species-diversity-source": "unknown",
                                  "taxon-age": "unknown",
                                  "taxon-age-source": "unknown",
                                  "children": [
                                    {
                                      "name": "Orangutans",
                                      "species-diversity": "unknown",
                                      "species-diversity-source": "unknown",
                                      "taxon-age": "unknown",
                                      "taxon-age-source": "unknown",
                                      "children": [],
                                    },
                                    {
                                      "name": "Chimps",
                                      "species-diversity": "unknown",
                                      "species-diversity-source": "unknown",
                                      "taxon-age": "unknown",
                                      "taxon-age-source": "unknown",
                                      "children": [],
                                    },
                                    {
                                      "name": "Gorillas",
                                      "species-diversity": "unknown",
                                      "species-diversity-source": "unknown",
                                      "taxon-age": "unknown",
                                      "taxon-age-source": "unknown",
                                      "children": [],
                                    },
                                    {
                                      "name": "Humans",
                                      "species-diversity": "unknown",
                                      "species-diversity-source": "unknown",
                                      "taxon-age": "unknown",
                                      "taxon-age-source": "unknown",
                                      "children": [],
                                    }
                                  ],
                                },
                                {
                                  "name": "Gibbons",
                                  "species-diversity": "unknown",
                                  "species-diversity-source": "unknown",
                                  "taxon-age": "unknown",
                                  "taxon-age-source": "unknown",
                                  "children": [],
                                }




                              ],
                            }



                          ],
  	  	  	  	  	  	},
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Carnivora",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Rodents",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	}

  	  	  	  	  	  ],
  	  	  	  	  	},

  	  	  	  	  	{
  	  	  	  	  	  "name": "Reptiles",
  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  "children": [
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Lizards",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},
  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Turtles",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	},

  	  	  	  	  	  	{
  	  	  	  	  	  	  "name": "Dinosaurs",
  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  "children": [
  	  	  	  	  	  	  	{
  	  	  	  	  	  	  	  "name": "Birds",
  	  	  	  	  	  	  	  "species-diversity": "unknown",
  	  	  	  	  	  	  	  "species-diversity-source": "unknown",
  	  	  	  	  	  	  	  "taxon-age": "unknown",
  	  	  	  	  	  	  	  "taxon-age-source": "unknown",
  	  	  	  	  	  	  	  "children": [],
  	  	  	  	  	  	  	}

  	  	  	  	  	  	  ],
  	  	  	  	  	  	}

  	  	  	  	  	  ],
  	  	  	  	  	}

  	  	  	  	  ],
  	  	  	  	}



  	  	  	  ],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Teleosts",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},
  	  	  	{
  	  	  	  "name": "Chondrichthyes",
  	  	  	  "species-diversity": "unknown",
  	  	  	  "species-diversity-source": "unknown",
  	  	  	  "taxon-age": "unknown",
  	  	  	  "taxon-age-source": "unknown",
  	  	  	  "children": [],
  	  	  	},

  	  	  ],
  	  	}
  	  ],
  	}
  ],
}




