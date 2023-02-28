package it.peppemig.deliverooclone.controllers;

import it.peppemig.deliverooclone.models.Featured;
import it.peppemig.deliverooclone.services.FeaturedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/featured")
public class FeaturedController {

    @Autowired
    private FeaturedService featuredService;

    @GetMapping("")
    private List<Featured> getAllFeatured() {
        return featuredService.getAllFeatured();
    }
}
