"""
File that contains all data for BitFit.
Author: Imran Matin
"""

######################################################################################################################################################

## TEST USER CREDENTIALS
TEST_EMAIL = "test@gmail.com"
TEST_PASSWORD = "test123"
TEST_USERNAME = "test"
TEST_FULLNAME = "test"
TEST_AVATAR = "avatar"

## TEST USER CREDENTIALS
# TEST_EMAIL = "demo@gmail.com"
# TEST_PASSWORD = "demo123"
# TEST_USERNAME = "demo"
# TEST_FULLNAME = "demo"
# TEST_AVATAR = "demo_avatar"

######################################################################################################################################################

## TROPHIES
TROPHY_1_URL = "https://ericyu.file.core.windows.net/cse110/trophy_1.png?sp=rl&st=2020-05-23T17:50:20Z&se=2022-02-15T17:50:00Z&sv=2019-10-10&sig=ApfsYQ7UOEv3j7qbDCbeGD4KIY1iUO0l1BZgun1yBX8%3D&sr=f"
TROPHY_2_URL = "https://ericyu.file.core.windows.net/cse110/trophy_2.png?sp=rl&st=2020-05-23T17:51:07Z&se=2021-09-13T17:51:00Z&sv=2019-10-10&sig=tRAbE1rFg4OSlyaTpt016yunPPapefLKuidJI7nUdoA%3D&sr=f"
LOCK_URL = "https://ericyu.file.core.windows.net/cse110/lock.png?sp=rl&st=2020-05-23T17:51:25Z&se=2021-12-13T17:51:00Z&sv=2019-10-10&sig=2xyD2F%2FC6UQDmJh5dO3c%2B8ziRubv%2BX9GFIN9VysCNa8%3D&sr=f"

# NOTE: NOT IMPLEMENTED BELOW, instead created in Main.py because haven't defined specific trophies yet
ALL_TROPHIES = [
    {
        "data": {
            "trophy_name": "Trophy 1",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 1 workout!",
            "num_completed": 1,
        }
    },
    {
        "data": {
            "trophy_name": "Trophy 2",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 3 workouts!",
            "num_completed": 3,
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 3",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 5 workouts!",
            "num_completed": 5,
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 4",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 10 workouts!",
            "num_completed": 10,
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 5",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 20 workouts!",
            "num_completed": 20,
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 6",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 30 workouts!",
            "num_completed": 30,
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 7",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 50 workouts!",
            "num_completed": 50,
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 8",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 100 workouts!",
            "num_completed": 100,
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 9",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "Complete 200 workouts!",
            "num_completed": 200,
        },
    },
]

######################################################################################################################################################

## BODY_PARTS
CORE_URL = "https://ericyu.file.core.windows.net/cse110/abs.png?sp=rl&st=2020-05-23T19:29:17Z&se=2022-03-09T19:29:00Z&sv=2019-10-10&sig=papqRB86wos49lhArBia4kb1yBzKz0J9Jexl0YJ7qrY%3D&sr=f "
ARMS_URL = "https://ericyu.file.core.windows.net/cse110/arms.png?sp=rl&st=2020-05-23T19:30:35Z&se=2022-04-12T19:30:00Z&sv=2019-10-10&sig=5PRvfXIZtU6l6ACT8wpR4qWe3ANVEIO%2F6IjDLBtuFeM%3D&sr=f "
BACK_URL = "https://ericyu.file.core.windows.net/cse110/back.png?sp=rl&st=2020-05-23T19:30:53Z&se=2022-02-15T19:30:00Z&sv=2019-10-10&sig=XcMKRFRojRenQknz7QxMrxc5KNC5gCfR6cWKYQV0zTY%3D&sr=f "
CHEST_URL = "https://ericyu.file.core.windows.net/cse110/chest.png?sp=rl&st=2020-05-23T19:31:15Z&se=2022-06-14T19:31:00Z&sv=2019-10-10&sig=d7tg7K1ICLUEiq6B5iAvKTWB%2FLjMQ8nZjtr6oHFJzEw%3D&sr=f "
LEGS_URL = "https://ericyu.file.core.windows.net/cse110/legs.png?sp=rl&st=2020-05-23T19:31:32Z&se=2022-04-06T19:31:00Z&sv=2019-10-10&sig=XhDkW5LGAtbedLWvdiWpscBfJ5tfRiGy85pljwoTwJM%3D&sr=f "

ALL_BODY_PARTS = [
    {"data": {"body_part_name": "Core", "image": CORE_URL}},
    {"data": {"body_part_name": "Arms", "image": ARMS_URL}},
    {"data": {"body_part_name": "Legs", "image": LEGS_URL}},
    {"data": {"body_part_name": "Chest", "image": CHEST_URL}},
    {"data": {"body_part_name": "Back", "image": BACK_URL}},
]

######################################################################################################################################################

## WORKOUTS
# CORE
RUSSIAN_TWIST = {
    "description": "Legend has it some Russian guy did these to wrestle with crocodiles.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Abs-RussianTwists.gif?sp=rl&st=2020-05-29T04:50:11Z&se=2022-01-19T04:50:00Z&sv=2019-10-10&sig=qsYrVm9YYEgN1EzKrDwx6N%2BrjqjXCUCukNo%2BgtTgIMc%3D&sr=f ",
}
CRUNCH = {
    "description": "The classic ab maneuver; good to do on the fly.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Core-Crunches.gif?sp=rl&st=2020-05-29T04:50:48Z&se=2022-03-25T04:50:00Z&sv=2019-10-10&sig=JKP%2FABnrsQN18A2qrydd9sAwHCVpn9nGQjNh74jeDuY%3D&sr=f",
}
LEG_RAISE = {
    "description": "Here's a workout where you look like a fish flopping on land!",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Core-LegRaise.gif?sp=rl&st=2020-05-29T04:51:06Z&se=2021-10-22T04:51:00Z&sv=2019-10-10&sig=h7AVIyuGUNbru%2BpTfXvAoIql5ZAQDIy4fd0HM5nAclw%3D&sr=f",
}

# LEGS
SQUAT = {
    "description": "Remember that the proper form is to stick your butt out.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Legs-Squats.gif?sp=rl&st=2020-05-29T04:51:27Z&se=2022-04-06T04:51:00Z&sv=2019-10-10&sig=UxTM7JRLxgRPNaYlYF138hgkoUt94WD29lD42SidqOc%3D&sr=f"
}

SIDE_LUNGE = {
    "description": "Make sure you're not wearing jeans for this one (not that you'd wear jeans while working out... right??)",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Legs-SideLunges.gif?sp=rl&st=2020-05-29T04:51:45Z&se=2022-04-13T04:51:00Z&sv=2019-10-10&sig=wReDjYRTL0qXtTXAuee26TrS2MRjX55p3DIVLpfg0%2BU%3D&sr=f"
}

LUNGE = {
    "description": "Who walks like that anyway?",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Legs-Lunges.gif?sp=rl&st=2020-05-29T04:52:03Z&se=2022-04-21T04:52:00Z&sv=2019-10-10&sig=x0DumOburvLwW5IrAVdN7VNFKDZmAh3Pm9%2F5Wb%2FAFwQ%3D&sr=f"
}

# BACK
BENT_OVER_ROW = {
    "description": "Got a spare rope lying around?", 
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Back-BentOverRow.gif?sp=rl&st=2020-05-29T04:52:21Z&se=2022-05-18T04:52:00Z&sv=2019-10-10&sig=X1IXvzPEEwqVObQl2tZWZjEUWhyf6w5zsG1Z7%2BVPvxM%3D&sr=f"
}
OVERHEAD_PRESS = {
    "description": "A few of these bad boys and you'll look like Arnold Schwarzenegger in no time.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Back-OverheadPress.gif?sp=rl&st=2020-05-29T04:52:37Z&se=2022-04-13T04:52:00Z&sv=2019-10-10&sig=tEy110GMmA12zkyiWMTW6mFph3dPHYu5a7co6Df%2BRSs%3D&sr=f ",
}
SUPERMAN = {
    "description": "Let's be honest, it looks more like a confused swimmer on land than Superman.", 
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Back-AlternatingSupermans.gif?sp=rl&st=2020-05-29T04:52:52Z&se=2022-03-29T04:52:00Z&sv=2019-10-10&sig=qRvJWBlQEiwTJrl9noDcDwBh5JFbmmkJ1zgLIjLX0Do%3D&sr=f "
}

# ARMS
BICEP_CURLS = {
    "description": "The perfect way to brush up the “guns” and flex on everyone else.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Arms-BicepCurls.gif?sp=rl&st=2020-05-29T04:53:07Z&se=2022-04-21T04:53:00Z&sv=2019-10-10&sig=0qTSxHo4hcSwxDA6DInsq8qDBhiKO%2Bx8dp%2BKtAe%2FdE4%3D&sr=f"
}

PUSH_UPS = {
    "description": "Do you push up, or do you push the Earth down like Chuck Norris?",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Arms-Pushups.gif?sp=rl&st=2020-05-29T04:53:25Z&se=2022-03-23T04:53:00Z&sv=2019-10-10&sig=KxhgemE%2B5nQWCnC96okwt4P4PW4Uo%2FLSToOlNM8NZFM%3D&sr=f"
}

LATERAL_RAISE = {
    "description": "Pretty sure if you do enough of these you'll be strong enough to fly.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Arms-LateralRaise.gif?sp=rl&st=2020-05-29T04:53:39Z&se=2022-04-21T04:53:00Z&sv=2019-10-10&sig=dyEZl%2Bgw4oouXPOMVVnEOCF9WW0jqORjcWESWMhu2jI%3D&sr=f"
}

# CHEST
BENCH_PRESS = {
    "description": "Did someone say pec activation?",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Chest-Chestpress.gif?sp=rl&st=2020-05-29T04:53:55Z&se=2022-03-29T04:53:00Z&sv=2019-10-10&sig=dRG3E2LfPllasO%2BUGlEuccohMUR02Nzzj1XQR5tGFYQ%3D&sr=f"
}

DUMBBELL_PULLOVER = {
    "description": "Works with a backpack too if you don’t have equipment. Or a textbook. Or anything that is carry-able.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Chest-DumbellPullover.gif?sp=rl&st=2020-05-29T04:54:12Z&se=2022-04-19T04:54:00Z&sv=2019-10-10&sig=cwAQgDn%2FQWHJjqSEA0NGIQ0o732d9%2BOJxKTc6eLGhUg%3D&sr=f"
}

CHEST_FLY = {
    "description": "Unfortunately you won’t be able to actually fly after doing these since you won’t be flapping the right way.",
    "image": "https://ericyu.file.core.windows.net/cse110/Workouts/Chest-ChestFly.gif?sp=rl&st=2020-05-29T04:54:28Z&se=2022-01-29T04:54:00Z&sv=2019-10-10&sig=aW17oMP6axomw1XrpM2s3JZyR%2FLqjzcFdjX5HrjDDi4%3D&sr=f"
}



ALL_WORKOUTS = [
    {
        "data": {
            "workout_name": "Russian Twists",
            "body_part_name": "Core",
            "description": RUSSIAN_TWIST["description"],
            "image": RUSSIAN_TWIST["image"],
        }
    },
    {
        "data": {
            "workout_name": "Crunches",
            "body_part_name": "Core",
            "description": CRUNCH["description"],
            "image": CRUNCH["image"],
        }
    },
    {
        "data": {
            "workout_name": "Leg Raises",
            "body_part_name": "Core",
            "description": LEG_RAISE["description"],
            "image": LEG_RAISE["image"],
        }
    },
    {
        "data": {
            "workout_name": "Squat",
            "body_part_name": "Legs",
            "description": SQUAT["description"],
            "image": SQUAT["image"],
        }
    },
    {
        "data": {
            "workout_name": "Side Lunges",
            "body_part_name": "Legs",
            "description": SIDE_LUNGE["description"],
            "image": SIDE_LUNGE["image"],
        }
    },
    {
        "data": {
            "workout_name": "Lunges",
            "body_part_name": "Legs",
            "description": LUNGE["description"],
            "image": LUNGE["image"],
        }
    },
    {
        "data": {
            "workout_name": "Bent Over Row",
            "body_part_name": "Back",
            "description": BENT_OVER_ROW["description"],
            "image": BENT_OVER_ROW["image"],
        }
    },
    {
        "data": {
            "workout_name": "Overhead Press",
            "body_part_name": "Back",
            "description": OVERHEAD_PRESS["description"],
            "image": OVERHEAD_PRESS["image"],
        }
    },
    {
        "data": {
            "workout_name": "Supermans",
            "body_part_name": "Back",
            "description": SUPERMAN["description"],
            "image": SUPERMAN["image"],
        }
    },
    {
        "data": {
            "workout_name": "Bicep Curls",
            "body_part_name": "Arms",
            "description": BICEP_CURLS["description"],
            "image": BICEP_CURLS["image"],
        }
    },
    {
        "data": {
            "workout_name": "Push-ups",
            "body_part_name": "Arms",
            "description": PUSH_UPS["description"],
            "image": PUSH_UPS["image"],
        }
    },
    {
        "data": {
            "workout_name": "Lateral Raise",
            "body_part_name": "Arms",
            "description": LATERAL_RAISE["description"],
            "image": LATERAL_RAISE["image"],
        }
    },
    {
        "data": {
            "workout_name": "Bench Press",
            "body_part_name": "Chest",
            "description": BENCH_PRESS["description"],
            "image": BENCH_PRESS["image"],
        }
    },
    {
        "data": {
            "workout_name": "Dumbbell Pullover",
            "body_part_name": "Chest",
            "description": DUMBBELL_PULLOVER["description"],
            "image": DUMBBELL_PULLOVER["image"],
        }
    },
    {
        "data": {
            "workout_name": "Chest Fly",
            "body_part_name": "Chest",
            "description": CHEST_FLY["description"],
            "image": CHEST_FLY["image"],
        }
    },
]

######################################################################################################################################################
