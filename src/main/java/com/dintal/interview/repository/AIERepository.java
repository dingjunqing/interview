package com.dintal.interview.repository;

import com.dintal.interview.domain.AIE;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the AIE entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AIERepository extends JpaRepository<AIE, String> {}
