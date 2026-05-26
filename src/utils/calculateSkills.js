import projectsData from "../data/projectsData";
import skillWeights from "../data/skillWeights";

function calculateSkills() {

  const skillScores = {};

  const skillFeatures = {};

  projectsData.forEach((project) => {

    const technologies =
      project.technologies;

    Object.keys(technologies)
      .forEach((tech) => {

        // Initialize score
        if (!skillScores[tech]) {

          skillScores[tech] = 0;

        }

        // Initialize features
        if (!skillFeatures[tech]) {

          skillFeatures[tech] = [];

        }

        technologies[tech]
          .forEach((feature) => {

            // Add feature score
            skillScores[tech] +=
              skillWeights[feature] || 0;

            // Store features
            skillFeatures[tech]
              .push(feature);

          });

      });

  });

  // Find highest score
  const maxScore =
    Math.max(
      ...Object.values(skillScores)
    );

  // Generate final data
  const finalSkills =
    Object.keys(skillScores)
      .map((tech) => ({

        name: tech,

        percentage: Math.round(

          (skillScores[tech] / maxScore)
          * 100

        ),

        score:
          skillScores[tech],

        features:

          // Remove duplicates
          [...new Set(
            skillFeatures[tech]
          )]

      }));

  return finalSkills;
}

export default calculateSkills;