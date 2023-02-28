package it.peppemig.deliverooclone.services;

import it.peppemig.deliverooclone.models.Category;
import it.peppemig.deliverooclone.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> allMovies() {
        return categoryRepository.findAll();
    }
}
