package it.peppemig.deliverooclone.services;

import it.peppemig.deliverooclone.models.Featured;
import it.peppemig.deliverooclone.repositories.FeaturedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeaturedService {

    @Autowired
    private FeaturedRepository featuredRepository;

    public List<Featured> getAllFeatured() {
        return featuredRepository.findAll();
    }
}
