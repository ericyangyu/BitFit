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
            "description": "This is trophy 1",
            "requirement": "Requirement 1",
        }
    },
    {
        "data": {
            "trophy_name": "Trophy 2",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 2",
            "requirement": "Requirement 2",
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 3",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 3",
            "requirement": "Requirement 3",
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 4",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 4",
            "requirement": "Requirement 4",
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 5",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 5",
            "requirement": "Requirement 5",
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 6",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 6",
            "requirement": "Requirement 6",
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 7",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 7",
            "requirement": "Requirement 7",
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 8",
            "displayed_image": TROPHY_2_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 8",
            "requirement": "Requirement 8",
        },
    },
    {
        "data": {
            "trophy_name": "Trophy 9",
            "displayed_image": TROPHY_1_URL,
            "hidden_image": LOCK_URL,
            "description": "This is trophy 9",
            "requirement": "Requirement 9",
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
RUSSIAN_TWIST = {
    "description": "Legend has it some Russian guy did these to wrestle with crocodiles.",
    "image": "https://ericyu.file.core.windows.net/cse110/russian_twist.gif?sp=rl&st=2020-05-23T19:31:48Z&se=2022-04-11T19:31:00Z&sv=2019-10-10&sig=SQcfeem1bieLvBgalOjuv0u7nOqMfd3hssMBoSVmLQM%3D&sr=f ",
}
CRUNCH = {
    "description": "“The classic ab maneuver; good to do on the fly.”",
    "image": "https://ericyu.file.core.windows.net/cse110/situp.gif?sp=rl&st=2020-05-23T19:32:08Z&se=2022-03-09T19:32:00Z&sv=2019-10-10&sig=OlIkapmUV%2FGFeVYdGl2GJGxgnzvpQ36E3tn9I7%2BRqA4%3D&sr=f ",
}
HAMSTRING_CURLS = {
    "workout_name": "Hamstring Curls",
    "description": "Basically the bicep curls of the legs.",
    "image": LOCK_URL,
}
BAND_BENT_OVER_ROW = {"description": "Got a spare rope lying around?", "image": ""}
BICEP_CURLS = {
    "description": "The perfect way to brush up the “guns” and flex on everyone else.",
    "image": LOCK_URL,
}
BENCH_PRESS = {"description": "Did someone say pec activation?", "image": ""}
SQUAT = {
    "description": "Remember that the proper form is to stick your butt out.",
    "image": LOCK_URL,
}


ALL_WORKOUTS = [
    {
        "data": {
            "workout_name": "Hamstring Curls",
            "body_part_name": "Legs",
            "description": HAMSTRING_CURLS["description"],
            "image": RUSSIAN_TWIST["image"],
        }
    },
    {
        "data": {
            "workout_name": "Squat",
            "body_part_name": "Legs",
            "description": SQUAT["description"],
            "image": RUSSIAN_TWIST["image"],
        }
    },
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
            "workout_name": "Crunch",
            "body_part_name": "Core",
            "description": CRUNCH["description"],
            "image": CRUNCH["image"],
        }
    },
    {
        "data": {
            "workout_name": "Band Bent-Over Row",
            "body_part_name": "Back",
            "description": BAND_BENT_OVER_ROW["description"],
            "image": RUSSIAN_TWIST["image"],
        }
    },
    {
        "data": {
            "workout_name": "Bench Press",
            "body_part_name": "Chest",
            "description": BENCH_PRESS["description"],
            "image": RUSSIAN_TWIST["image"],
        }
    },
    {
        "data": {
            "workout_name": "Bicep Curls",
            "body_part_name": "Arms",
            "description": BICEP_CURLS["description"],
            "image": RUSSIAN_TWIST["image"],
        }
    },
]

######################################################################################################################################################
